import Asset from '../models/Asset.js';
import yahooFinance from 'yahoo-finance2';

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

// Promise timeout wrapper
const withTimeout = (promise, ms) => {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('Request Timeout')), ms))
  ]);
};

// @desc    Get live market pulse metrics for user portfolio holdings
// @route   GET /api/market/pulse
const getMarketPulse = async (req, res) => {
  try {
    const assets = await Asset.find({ userId: req.user._id });
    if (!assets || assets.length === 0) {
      return res.status(200).json([]);
    }

    const baseCurrency = req.user.settings?.baseCurrency || 'INR';

    // Scan Holdings
    const equityTickers = [...new Set(
      assets
        .filter(a => a.assetClass === 'Equity' && a.assetTicker)
        .map(a => a.assetTicker.toUpperCase().trim())
    )];

    const cryptoTickers = [...new Set(
      assets
        .filter(a => a.assetClass === 'Crypto' && a.assetTicker)
        .map(a => a.assetTicker.toUpperCase().trim())
    )];

    const holdsGold = assets.some(a => 
      a.assetClass === 'Precious Metals' || 
      (a.assetClass === 'Commodity' && (a.assetTicker?.toUpperCase() === 'GOLD' || a.assetTicker?.toUpperCase() === 'XAU')) ||
      (a.assetName && a.assetName.toUpperCase().includes('GOLD'))
    );

    const pulseData = [];

    // 1. Fetch gold / precious metals spot rate
    if (holdsGold) {
      try {
        let exchangeRate = 1;
        if (baseCurrency !== 'USD') {
          try {
            const symbol = `${baseCurrency}=X`;
            const rateQuote = await withTimeout(yahooFinance.quote(symbol), 3500);
            if (rateQuote && typeof rateQuote.regularMarketPrice === 'number') {
              exchangeRate = rateQuote.regularMarketPrice;
            } else {
              const fallbackSymbol = `USD${baseCurrency}=X`;
              const fallbackQuote = await withTimeout(yahooFinance.quote(fallbackSymbol), 3500);
              if (fallbackQuote && typeof fallbackQuote.regularMarketPrice === 'number') {
                exchangeRate = fallbackQuote.regularMarketPrice;
              }
            }
          } catch (exErr) {
            console.warn(`[Pulse Gold] Exchange rate fetch failed for ${baseCurrency}:`, exErr.message);
          }
        }

        const goldQuote = await withTimeout(yahooFinance.quote('GC=F'), 3500);
        if (goldQuote && typeof goldQuote.regularMarketPrice === 'number') {
          const goldPricePerGram = (goldQuote.regularMarketPrice / 31.1035) * exchangeRate;
          pulseData.push({
            symbol: 'GOLD (1g)',
            name: 'Gold Spot (24K)',
            currentPrice: goldPricePerGram,
            dailyChangePercentage: goldQuote.regularMarketChangePercent || 0
          });
        }
      } catch (goldErr) {
        console.error('[Pulse Gold] Failed to fetch gold rate:', goldErr.message);
      }
    }

    // 2. Fetch Equities (Yahoo Finance) sequentially
    for (const ticker of equityTickers) {
      await new Promise(resolve => setTimeout(resolve, 50));
      try {
        const quote = await withTimeout(yahooFinance.quote(ticker), 3500);
        if (quote && typeof quote.regularMarketPrice === 'number') {
          pulseData.push({
            symbol: ticker,
            name: quote.longName || quote.shortName || ticker,
            currentPrice: quote.regularMarketPrice,
            dailyChangePercentage: quote.regularMarketChangePercent || 0
          });
        }
      } catch (eqErr) {
        console.warn(`[Pulse Equity] Failed to fetch quote for ${ticker}:`, eqErr.message);
      }
    }

    // 3. Fetch Cryptos (CoinGecko with Yahoo Finance Fallback)
    if (cryptoTickers.length > 0) {
      const coingeckoIds = cryptoTickers.map(t => cryptoTickerToId[t] || t.toLowerCase());
      try {
        const idsQuery = coingeckoIds.join(',');
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${idsQuery}&vs_currencies=usd&include_24hr_change=true`,
          { signal: controller.signal }
        );
        clearTimeout(timeoutId);
        
        if (response.ok) {
          const data = await response.json();
          
          for (const ticker of cryptoTickers) {
            const cgId = cryptoTickerToId[ticker] || ticker.toLowerCase();
            if (data[cgId]) {
              pulseData.push({
                symbol: ticker,
                name: ticker,
                currentPrice: data[cgId].usd,
                dailyChangePercentage: data[cgId].usd_24h_change || 0
              });
            } else {
              // Fallback to Yahoo Finance sequentially
              await new Promise(resolve => setTimeout(resolve, 50));
              try {
                const quote = await withTimeout(yahooFinance.quote(`${ticker}-USD`), 3500);
                if (quote && typeof quote.regularMarketPrice === 'number') {
                  pulseData.push({
                    symbol: ticker,
                    name: quote.longName || quote.shortName || ticker,
                    currentPrice: quote.regularMarketPrice,
                    dailyChangePercentage: quote.regularMarketChangePercent || 0
                  });
                }
              } catch (yfErr) {
                console.warn(`[Pulse Crypto Fallback] Failed for ${ticker}:`, yfErr.message);
              }
            }
          }
        } else {
          throw new Error('CoinGecko responded with non-200 status');
        }
      } catch (cgErr) {
        console.warn(`[Pulse Crypto Coingecko] Failed, using Yahoo fallback:`, cgErr.message);
        for (const ticker of cryptoTickers) {
          await new Promise(resolve => setTimeout(resolve, 50));
          try {
            const quote = await withTimeout(yahooFinance.quote(`${ticker}-USD`), 3500);
            if (quote && typeof quote.regularMarketPrice === 'number') {
              pulseData.push({
                symbol: ticker,
                name: quote.longName || quote.shortName || ticker,
                currentPrice: quote.regularMarketPrice,
                dailyChangePercentage: quote.regularMarketChangePercent || 0
              });
            }
          } catch (yfErr) {
            console.warn(`[Pulse Crypto Fallback] Failed for ${ticker}:`, yfErr.message);
          }
        }
      }
    }

    res.status(200).json(pulseData);
  } catch (error) {
    console.error('❌ MARKET_PULSE_ERROR:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default {
  getMarketPulse
};
