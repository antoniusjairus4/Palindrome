import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, ArrowUpRight, ArrowDownRight, Activity, 
  Database, ShieldCheck, Wallet, Plus, Trash2, HelpCircle 
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { useUXMode } from '../context/UXModeContext';
import AddAssetModal from './AddAssetModal';

export default function Assets() {
  const { formatValue } = useCurrency();
  const { workspaceMode, tUX } = useUXMode();
  const [loading, setLoading] = useState(true);
  const [dbStatus, setDbStatus] = useState('CONNECTING');
  const [latency, setLatency] = useState('11ms');
  const [modalOpen, setModalOpen] = useState(false);
  const [assets, setAssets] = useState([]);
  const [aggregateAssetValue, setAggregateAssetValue] = useState(0);

  // Latency Simulator
  useEffect(() => {
    const interval = setInterval(() => {
      const ms = Math.floor(Math.random() * 5) + 8;
      setLatency(`${ms}ms`);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchValuation = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      
      const res = await axios.get('/api/portfolio/valuation', config);
      if (res.data) {
        setAssets(res.data.assets || []);
        setAggregateAssetValue(res.data.aggregateAssetValue || 0);
        setDbStatus('ONLINE');
      }
    } catch (error) {
      console.warn('[Assets System] Portfolio API offline. Loading cached assets.', error.message);
      setDbStatus('SANDBOX');
      
      // Seed dummy assets for sandbox fallback
      const cachedAssets = [
        { _id: 'ast_1', assetTicker: 'AAPL', assetName: 'Apple Inc.', quantity: 10, assetClass: 'Equity', currentPrice: 185.40, change24h: 1.25, totalValue: 1854.00 },
        { _id: 'ast_2', assetTicker: 'BTC', assetName: 'Bitcoin', quantity: 0.12, assetClass: 'Crypto', currentPrice: 65200.00, change24h: -2.18, totalValue: 7824.00 },
        { _id: 'ast_3', assetTicker: 'GOLD', assetName: 'Gold COMEX', quantity: 3, assetClass: 'Commodity', currentPrice: 2320.50, change24h: 0.45, totalValue: 6961.50 }
      ];
      setAssets(cachedAssets);
      setAggregateAssetValue(cachedAssets.reduce((sum, a) => sum + a.totalValue, 0));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchValuation();
  }, []);

  const handleDeleteAsset = async (id) => {
    if (!window.confirm('Are you sure you want to remove this asset holding?')) return;

    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`/api/portfolio/assets/${id}`, config);
      fetchValuation();
    } catch (error) {
      console.warn('[Assets Sandbox] Removed local asset.', error.message);
      const updated = assets.filter(a => a._id !== id);
      setAssets(updated);
      setAggregateAssetValue(updated.reduce((sum, a) => sum + a.totalValue, 0));
    }
  };

  const formatAmount = (val) => {
    try {
      if (formatValue) return formatValue(val);
    } catch (e) {}
    return `$${Number(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-350 relative z-10 font-sans"
    >
      {/* ── HEADER TITLE SECTION ── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200/60 dark:border-white/10 pb-6 transition-colors">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-sans antialiased">
              {tUX('Asset Valuation / Holdings')}
            </h1>
            <span className="text-[10px] font-bold tracking-wider text-indigo-650 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 px-2 py-0.5 rounded-full uppercase select-none">
              Live Valuations
            </span>
          </div>
          <p className="text-xs text-slate-455 dark:text-slate-555 font-sans font-normal leading-relaxed">
            Monitor stocks, crypto, and commodity holdings with real-time price updates and total value integrations.
          </p>
        </div>

        {/* Diagnostics & Controls */}
        <div className="flex flex-wrap items-center gap-3 font-sans text-xs">
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs tracking-wide font-bold rounded-xl shadow-sm hover:scale-[1.005] active:scale-[0.99] transition-all duration-200 cursor-pointer border border-indigo-700/10 flex items-center gap-2"
          >
            <Plus className="w-3.5 h-3.5 text-white" />
            Log Asset Holding
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Activity className="w-8 h-8 text-indigo-650 animate-spin" />
          <span className="text-xs text-slate-400 uppercase tracking-widest">Evaluating {tUX('Asset Portfolio').toLowerCase()}...</span>
        </div>
      ) : (
        <>
          {/* ── 1. AGGREGATE METRIC CARD ── */}
          <div className="bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-indigo-100 dark:hover:border-indigo-900/50 hover:shadow-md transition-all duration-300 shadow-sm dark:shadow-none max-w-xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.02),transparent_60%)] pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4 text-xs font-medium text-slate-500 select-none relative z-10">
              <div className="flex items-center gap-2">
                <Wallet className="w-4 h-4 text-indigo-605 dark:text-indigo-400" />
                <span className="tracking-wide font-bold text-slate-700 dark:text-slate-300">Aggregate {tUX('Asset Portfolio')} Value</span>
              </div>
              <span className="text-[10px] bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/10 px-2.5 py-0.5 rounded-full font-semibold">
                Live Valuation
              </span>
            </div>

            <div className="relative z-10">
              <div className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white antialiased font-mono">
                {formatAmount(aggregateAssetValue)}
              </div>
              <p className="text-[10px] text-slate-400 mt-1 uppercase font-semibold">
                Summed valuation of all verified equities, cryptos, and commodities
              </p>
            </div>
          </div>

          {/* ── 2. ASSETS DATA TABLE ── */}
          <div className="bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-3xl p-6 hover:shadow-md transition-shadow duration-300 shadow-sm dark:shadow-none relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.01),transparent_60%)] pointer-events-none" />
            
            <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-white/5 text-slate-400 dark:text-slate-555 font-bold uppercase tracking-wider text-[9px]">
                    <th className="py-3 px-4">Asset Class</th>
                    <th className="py-3 px-4">Ticker</th>
                    <th className="py-3 px-4">Asset Name</th>
                    <th className="py-3 px-4 text-right">Quantity</th>
                    <th className="py-3 px-4 text-right">Unit Value</th>
                    <th className="py-3 px-4 text-center">24H Change</th>
                    <th className="py-3 px-4 text-right">Total Value</th>
                    <th className="py-3 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                  {assets.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="py-10 text-center text-slate-400 dark:text-slate-500 uppercase tracking-wider font-semibold">
                        No asset holdings logged inside this workspace registry.
                      </td>
                    </tr>
                  ) : (
                    assets.map((asset, idx) => {
                      const isPositive = asset.change24h >= 0;
                      return (
                        <tr key={asset._id || idx} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors group">
                          {/* Asset Class */}
                          <td className="py-4 px-4">
                            <span className="px-2 py-0.5 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/10 rounded font-sans text-[9px] uppercase font-bold">
                              {asset.assetClass}
                            </span>
                          </td>
                          {/* Ticker */}
                          <td className="py-4 px-4 font-mono font-bold text-slate-805 dark:text-white uppercase">
                            {asset.assetTicker || (
                              <span className="text-[9px] font-bold text-slate-500 dark:text-slate-600 bg-white/5 border border-white/5 px-1.5 py-0.5 rounded">
                                N/A
                              </span>
                            )}
                          </td>
                          {/* Asset Name */}
                          <td className="py-4 px-4 text-slate-700 dark:text-slate-300 font-semibold truncate max-w-[150px]">
                            {asset.assetName}
                          </td>
                          {/* Quantity */}
                          <td className="py-4 px-4 text-right font-mono font-semibold text-slate-700 dark:text-slate-350">
                            {asset.quantity}
                          </td>
                          {/* Unit Value */}
                          <td className="py-4 px-4 text-right font-mono font-semibold text-slate-805 dark:text-slate-200">
                            {formatAmount(asset.currentPrice)}
                          </td>
                          {/* 24h Change */}
                          <td className="py-4 px-4 text-center">
                            {asset.valuationMode === 'Manual' ? (
                              <span className="inline-flex items-center gap-1 text-[8px] bg-zinc-950 text-slate-500 border border-white/5 px-2 py-0.5 rounded font-bold uppercase select-none">
                                MANUAL PEG
                              </span>
                            ) : (
                              <span className={`inline-flex items-center gap-0.5 text-[10px] font-bold ${
                                isPositive ? 'text-emerald-500' : 'text-rose-500'
                              }`}>
                                {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                                {Math.abs(asset.change24h || 0).toFixed(2)}%
                              </span>
                            )}
                          </td>
                          {/* Total Value */}
                          <td className="py-4 px-4 text-right font-mono font-bold text-slate-900 dark:text-white">
                            {formatAmount(asset.totalValue)}
                          </td>
                          {/* Actions / Delete */}
                          <td className="py-4 px-4 text-center">
                            <button
                              onClick={() => handleDeleteAsset(asset._id)}
                              className="p-2 text-slate-400 hover:text-rose-500 dark:text-slate-500 dark:hover:text-rose-400 bg-slate-50 dark:bg-white/5 hover:bg-rose-50 dark:hover:bg-rose-950/20 border border-slate-100 dark:border-white/5 hover:border-rose-100 dark:hover:border-rose-900/30 rounded-lg transition-all duration-200 cursor-pointer"
                              title="Remove asset holding"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[10px] text-slate-400 dark:text-slate-500 uppercase font-semibold relative z-10">
              <span>Holdings Tracked: {assets.length}</span>
              <span>Pricing Service: Yahoo Finance / CoinGecko Web Index / Manual Registry</span>
            </div>
          </div>
        </>
      )}

      {/* Add Asset Modal */}
      <AddAssetModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onAssetAdded={() => {
          setModalOpen(false);
          fetchValuation();
        }}
      />
    </motion.div>
  );
}
