import Asset from '../models/Asset.js';
import YahooFinance from 'yahoo-finance2';

const yahooFinance = new YahooFinance();

// Map common cryptos to CoinGecko IDs
const cryptoTickerToId = {
  'BTC': 'bitcoin',
  'ETH': 'ethereum',
  'SOL': 'solana',
  'ADA': 'cardano',
  'DOT': 'polkadot',
  'DOGE': 'dogecoin',
  'XRP': 'ripple',
  'LINK': 'chainlink',
  'LTC': 'litecoin',
  'AVAX': 'avalanche-2',
  'MATIC': 'matic-network',
  'UNI': 'uniswap',
  'ATOM': 'cosmos',
  'ALGO': 'algorand',
  'XLM': 'stellar',
  'FIL': 'filecoin',
  'ICP': 'internet-computer',
  'HBAR': 'hedera-hashgraph',
  'VET': 'vechain',
  'SAND': 'the-sandbox',
  'MANA': 'decentraland',
  'SHIB': 'shiba-inu',
  'PEPE': 'pepe'
};

// Map common commodities to Yahoo Finance symbols
const commodityTickerMapping = {
  'GOLD': 'GC=F',
  'XAU': 'GC=F',
  'SILVER': 'SI=F',
  'XAG': 'SI=F',
  'PLATINUM': 'PL=F',
  'COPPER': 'HG=F',
  'CRUDE': 'CL=F',
  'OIL': 'CL=F'
};

// Promise timeout wrapper
const withTimeout = (promise, ms) => {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('Request Timeout')), ms))
  ]);
};

// Core pricing helper
const fetchPriceData = async (ticker, assetClass) => {
  const cleanTicker = ticker.trim().toUpperCase();

  if (assetClass === 'Crypto') {
    // 1. Try CoinGecko API with AbortController timeout
    const coingeckoId = cryptoTickerToId[cleanTicker] || cleanTicker.toLowerCase();
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);
      
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coingeckoId}&vs_currencies=usd&include_24hr_change=true`,
        { signal: controller.signal }
      );
      
      clearTimeout(timeoutId);
      
      if (response.ok) {
        const data = await response.json();
        if (data[coingeckoId]) {
          return {
            price: data[coingeckoId].usd,
            change24h: data[coingeckoId].usd_24h_change || 0,
            name: cleanTicker
          };
        }
      }
    } catch (cgError) {
      console.warn(`[Pricing Engine] CoinGecko failed for ${cleanTicker}:`, cgError.message);
    }

    // 2. Fallback: Yahoo Finance with -USD with timeout
    try {
      const yahooTicker = `${cleanTicker}-USD`;
      const result = await withTimeout(yahooFinance.quote(yahooTicker), 3500);
      if (result && typeof result.regularMarketPrice === 'number') {
        return {
          price: result.regularMarketPrice,
          change24h: result.regularMarketChangePercent || 0,
          name: result.longName || result.shortName || cleanTicker
        };
      }
    } catch (yfError) {
      console.error(`[Pricing Engine] Yahoo fallback failed for ${cleanTicker}-USD:`, yfError.message);
    }

    throw new Error(`Unable to fetch pricing for Crypto ticker: ${cleanTicker}`);
  }

  // Equities & Commodities (Yahoo Finance)
  let yfTicker = cleanTicker;
  if (assetClass === 'Commodity') {
    yfTicker = commodityTickerMapping[cleanTicker] || cleanTicker;
  }

  try {
    const result = await withTimeout(yahooFinance.quote(yfTicker), 3500);
    if (result && typeof result.regularMarketPrice === 'number') {
      return {
        price: result.regularMarketPrice,
        change24h: result.regularMarketChangePercent || 0,
        name: result.longName || result.shortName || cleanTicker
      };
    }
  } catch (yfError) {
    console.error(`[Pricing Engine] Yahoo Finance failed for ${yfTicker}:`, yfError.message);
  }

  throw new Error(`Unable to fetch pricing for ticker: ${cleanTicker}`);
};

// @desc    Get user assets and compute valuation
// @route   GET /api/portfolio/valuation
const getValuation = async (req, res) => {
  try {
    const assets = await Asset.find({ userId: req.user._id });
    
    // Evaluate assets sequentially to prevent concurrent rate limit spikes
    const valuedAssets = [];
    for (const asset of assets) {
      // Add a small 50ms spacing delay
      await new Promise(resolve => setTimeout(resolve, 50));
      
      // If Manual, bypass the API fetch completely
      if (asset.valuationMode === 'Manual') {
        const manualVal = asset.manualValue || 0;
        valuedAssets.push({
          _id: asset._id,
          assetTicker: asset.assetTicker || '',
          assetName: asset.assetName,
          quantity: asset.quantity,
          assetClass: asset.assetClass,
          valuationMode: asset.valuationMode,
          manualValue: manualVal,
          currentPrice: manualVal,
          change24h: 0,
          totalValue: manualVal * asset.quantity
        });
        continue;
      }

      try {
        const pricing = await fetchPriceData(asset.assetTicker, asset.assetClass);
        const totalValue = asset.quantity * pricing.price;
        
        valuedAssets.push({
          _id: asset._id,
          assetTicker: asset.assetTicker,
          assetName: pricing.name || asset.assetName,
          quantity: asset.quantity,
          assetClass: asset.assetClass,
          valuationMode: asset.valuationMode || 'Live',
          currentPrice: pricing.price,
          change24h: pricing.change24h,
          totalValue: totalValue
        });
      } catch (err) {
        console.warn(`[Portfolio Valuation] Failed to value ${asset.assetTicker}:`, err.message);
        // Return asset with fallback zero value to avoid crashing the whole view
        valuedAssets.push({
          _id: asset._id,
          assetTicker: asset.assetTicker,
          assetName: asset.assetName,
          quantity: asset.quantity,
          assetClass: asset.assetClass,
          valuationMode: asset.valuationMode || 'Live',
          currentPrice: 0,
          change24h: 0,
          totalValue: 0,
          error: true
        });
      }
    }

    const aggregateAssetValue = valuedAssets.reduce((sum, item) => sum + item.totalValue, 0);

    res.status(200).json({
      assets: valuedAssets,
      aggregateAssetValue
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Verify if ticker symbol is valid
// @route   GET /api/portfolio/verify
const verifyTicker = async (req, res) => {
  const { ticker, assetClass } = req.query;
  console.log(`[DEBUG] Verifying Ticker: ${ticker} for Class: ${assetClass}`);

  if (!ticker || !assetClass) {
    return res.status(400).json({ success: false, message: 'Ticker and assetClass are required queries' });
  }

  try {
    const pricing = await fetchPriceData(ticker, assetClass);
    res.status(200).json({
      success: true,
      valid: true,
      name: pricing.name,
      price: pricing.price
    });
  } catch (error) {
    console.error("[DEBUG] Third-party API Error:", error.message);
    res.status(404).json({
      success: false,
      message: "Asset not found on the selected exchange. Please check the ticker and asset class."
    });
  }
};

// @desc    Get user raw assets (unvalued list)
// @route   GET /api/portfolio/assets
const getAssets = async (req, res) => {
  try {
    const assets = await Asset.find({ userId: req.user._id });
    res.status(200).json(assets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add holding to portfolio registry
// @route   POST /api/portfolio/assets
const addAsset = async (req, res) => {
  const { assetTicker, assetName, quantity, assetClass, valuationMode, manualValue } = req.body;

  try {
    const isManual = valuationMode === 'Manual';

    // Basic validation
    if (!assetName || !quantity || !assetClass) {
      return res.status(400).json({ message: 'Asset Name, quantity, and class are required' });
    }

    if (!isManual && !assetTicker) {
      return res.status(400).json({ message: 'Ticker is required for live market assets' });
    }

    let resolvedName = assetName;
    let tickerToStore = null;

    if (!isManual) {
      tickerToStore = assetTicker.toUpperCase().trim();
      resolvedName = assetName || tickerToStore;
      // Verify ticker is valid before saving
      try {
        const pricing = await fetchPriceData(tickerToStore, assetClass);
        resolvedName = pricing.name || resolvedName;
      } catch (verifyErr) {
        return res.status(400).json({ message: `Ticker validation failed: ${verifyErr.message}` });
      }
    }

    const asset = await Asset.create({
      userId: req.user._id,
      assetTicker: tickerToStore,
      assetName: resolvedName,
      quantity: Number(quantity),
      assetClass,
      valuationMode: valuationMode || 'Live',
      manualValue: isManual ? Number(manualValue || 0) : undefined
    });

    res.status(201).json(asset);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Purge asset from registry
// @route   DELETE /api/portfolio/assets/:id
const deleteAsset = async (req, res) => {
  try {
    const asset = await Asset.findById(req.params.id);

    if (!asset) {
      return res.status(404).json({ message: 'Asset record not found' });
    }

    if (asset.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Unauthorized asset mutations' });
    }

    await asset.deleteOne();
    res.status(200).json({ id: req.params.id, message: 'Asset holding removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  getValuation,
  verifyTicker,
  getAssets,
  addAsset,
  deleteAsset
};
