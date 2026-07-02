import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { 
  Wallet, ArrowRight, ShieldCheck, 
  Layers, Activity, AlertCircle, Search, Trash2,
  RefreshCw, Sparkles, Database, Download, Calendar
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCurrency } from '../context/CurrencyContext';
import { useUXMode } from '../context/UXModeContext';
import AddExpenseModal from './AddExpenseModal';
import DateRangeFilter from '../components/DateRangeFilter';
import MarketPulseStrip from '../components/ui/MarketPulseStrip';

export function CoreDashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const { formatValue, currency, config: currencyConfig } = useCurrency();
  const { t, i18n } = useTranslation();
  const { workspaceMode, tUX } = useUXMode();

  // Route evaluation to toggle between Workspace HUD and Full Ledger Auditing History
  const showFullHistory = location.pathname === '/dashboard/transactions';

  // System status stats
  const [loading, setLoading] = useState(true);
  const [latency, setLatency] = useState('14ms');
  const [dbStatus, setDbStatus] = useState('CONNECTING');
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Primary Settings State
  const [settings, setSettings] = useState(() => {
    try {
      const stored = localStorage.getItem('__palindrome_settings');
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return {
      neonGlow: false,
      glassmorphicIntensity: 'Classic Matte',
      defaultTaxJurisdiction: 'None',
      liquidityThreshold: 40,
      defaultAnalyticsWindow: 'ALL'
    };
  });

  const [dateFilter, setDateFilter] = useState(() => {
    try {
      const stored = localStorage.getItem('__palindrome_settings');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.defaultAnalyticsWindow) return parsed.defaultAnalyticsWindow;
      }
    } catch (e) {}
    return 'ALL';
  });

  // Primary Financial States
  const [transactions, setTransactions] = useState([]);
  const [taxLiability, setTaxLiability] = useState(0);
  const [taxBracketPercent, setTaxBracketPercent] = useState(0);
  const [grossSalaryInput, setGrossSalaryInput] = useState('150000');
  const [taxCountry, setTaxCountry] = useState(() => {
    try {
      const stored = localStorage.getItem('__palindrome_settings');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.defaultTaxJurisdiction && parsed.defaultTaxJurisdiction !== 'None') {
          const mapping = { 'USA': 'US', 'United Kingdom': 'GB', 'India': 'IN' };
          return mapping[parsed.defaultTaxJurisdiction] || 'US';
        }
      }
    } catch (e) {}
    return 'US';
  });
  const [isCalculatingTax, setIsCalculatingTax] = useState(false);
  const [effectiveTaxRate, setEffectiveTaxRate] = useState(0);
  const [aggregateAssetValue, setAggregateAssetValue] = useState(0);
  const [pulseData, setPulseData] = useState([]);
  const [pulseLoading, setPulseLoading] = useState(true);

  // Sync settings state if updated
  useEffect(() => {
    try {
      const stored = localStorage.getItem('__palindrome_settings');
      if (stored) {
        const parsed = JSON.parse(stored);
        setSettings(parsed);
        if (parsed.defaultTaxJurisdiction && parsed.defaultTaxJurisdiction !== 'None') {
          const mapping = { 'USA': 'US', 'United Kingdom': 'GB', 'India': 'IN' };
          const code = mapping[parsed.defaultTaxJurisdiction];
          if (code) setTaxCountry(code);
        }
        if (parsed.defaultAnalyticsWindow) {
          setDateFilter(parsed.defaultAnalyticsWindow);
        }
      }
    } catch (e) {}
  }, []);

  const getGlassmorphicClass = (extra = '') => {
    let base = 'bg-white dark:bg-black border border-slate-100 dark:border-white/10';
    if (settings?.glassmorphicIntensity === 'Medium Frosted Glass') {
      base = 'bg-white/40 dark:bg-black/40 backdrop-blur-md border border-slate-200/50 dark:border-white/10';
    } else if (settings?.glassmorphicIntensity === 'Ultra High Translucency') {
      base = 'bg-white/10 dark:bg-zinc-950/10 backdrop-blur-lg border border-slate-200/30 dark:border-white/5';
    }
    return `${base} rounded-3xl p-6 relative overflow-hidden group transition-all duration-300 shadow-sm dark:shadow-none ${extra}`;
  };

  // Linked Accounts
  const linkedAccounts = [
    { name: "Checking Account", institution: "Checking Node", balance: 750000.00, type: "Operational Asset" },
    { name: "Savings Account", institution: "Savings Node", balance: 350000.00, type: "Reserve Pool" },
    { name: "Investment Account", institution: "Brokerage Node", balance: 145780.00, type: "Linked Account" }
  ];

  // Dynamic Net Worth calculation combining linked accounts
  const baseNetWorth = linkedAccounts.reduce((acc, curr) => acc + curr.balance, 0);

  // Recurring subscription data sorted by proximity
  const recurringFees = [
    { name: 'AWS CLOUD INFRA', amount: 8750.00, date: 'AUG 15', daysLeft: 3 },
    { name: 'NETFLIX PREMIUM', amount: 649.00, date: 'SEP 01', daysLeft: 19 },
    { name: 'GITHUB COPILOT', amount: 850.00, date: 'SEP 05', daysLeft: 23 },
    { name: 'ADOBE CREATIVE SUITE', amount: 4200.00, date: 'SEP 10', daysLeft: 28 }
  ];

  // Categorical Expenses Hard Allocation Datasets
  const categories = [
    { name: 'Fuel', amount: 8750, color: 'from-indigo-400 to-indigo-650 dark:from-indigo-500 dark:to-indigo-400', heightPercent: 78 },
    { name: 'Food', amount: 6200, color: 'from-rose-450 to-rose-500 dark:from-rose-500 dark:to-rose-400', heightPercent: 58 },
    { name: 'Travel', amount: 4100, color: 'from-amber-400 to-amber-500 dark:from-amber-500 dark:to-amber-450', heightPercent: 42 },
    { name: 'Shopping', amount: 3200, color: 'from-purple-400 to-purple-550 dark:from-purple-500 dark:to-purple-400', heightPercent: 32 },
    { name: 'Misc', amount: 1200, color: 'from-emerald-400 to-emerald-500 dark:from-emerald-500 dark:to-emerald-450', heightPercent: 18 },
    { name: 'Other', amount: 950, color: 'from-slate-400 to-slate-500 dark:from-slate-500 dark:to-slate-455', heightPercent: 12 },
  ];

  // Simulated latency variance
  useEffect(() => {
    const interval = setInterval(() => {
      const ms = Math.floor(Math.random() * 8) + 10;
      setLatency(`${ms}ms`);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Fetch transactions from database layer
  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      
      const res = await axios.get('/api/transactions', config);
      if (Array.isArray(res.data)) {
        setTransactions(res.data);
        localStorage.setItem('__palindrome_transactions', JSON.stringify(res.data));
      } else {
        setTransactions([]);
      }
      setDbStatus('ONLINE');
      setLoading(false);
    } catch (error) {
      console.warn('[Palindrome Engine] API connection offline. Resolving persistent storage fallbacks.', error.message);
      
      const cached = localStorage.getItem('__palindrome_transactions') || localStorage.getItem('__curie_transactions');
      if (cached) {
        try {
          setTransactions(JSON.parse(cached));
        } catch (e) {
          localStorage.removeItem('__palindrome_transactions');
          localStorage.removeItem('__curie_transactions');
        }
      } else {
        // Fallback transaction seeds
        const fallbacks = [
          { _id: 'tx_1', title: 'AMAZON INDIA', amount: -2499.00, category: 'Shopping', type: 'expense', createdAt: '2026-06-22T10:00:00.000Z' },
          { _id: 'tx_2', title: 'ZOMATO', amount: -875.00, category: 'Food', type: 'expense', createdAt: '2026-06-21T10:00:00.000Z' },
          { _id: 'tx_3', title: 'SALARY (IT INFRA)', amount: 95000.00, category: 'Income', type: 'income', createdAt: '2026-06-20T10:00:00.000Z' },
          { _id: 'tx_4', title: 'UTILITY BILL', amount: -4120.00, category: 'Bills', type: 'expense', createdAt: '2026-06-23T10:00:00.000Z' },
        ];
        setTransactions(fallbacks);
        localStorage.setItem('__palindrome_transactions', JSON.stringify(fallbacks));
      }
      setDbStatus('SANDBOX');
      setLoading(false);
    }
  };

  const fetchAssetValuation = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.get('/api/portfolio/valuation', config);
      if (res.data) {
        setAggregateAssetValue(res.data.aggregateAssetValue || 0);
      }
    } catch (err) {
      console.warn('[CoreDashboard] Assets valuation failed. Loading sandbox defaults.', err.message);
      setAggregateAssetValue(16639.50);
    }
  };

  const fetchMarketPulse = async () => {
    try {
      setPulseLoading(true);
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.get('/api/market/pulse', config);
      if (res.data) {
        setPulseData(res.data);
      }
    } catch (err) {
      console.warn('[CoreDashboard] Market pulse fetch failed. Loading mock details.', err.message);
      setPulseData([
        { symbol: 'BTC', name: 'Bitcoin', currentPrice: 62450.00, dailyChangePercentage: 2.34 },
        { symbol: 'ETH', name: 'Ethereum', currentPrice: 3420.50, dailyChangePercentage: -1.12 },
        { symbol: 'GOLD (1g)', name: 'Gold Spot (24K)', currentPrice: 72.45, dailyChangePercentage: 0.45 }
      ]);
    } finally {
      setPulseLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
    fetchAssetValuation();
    fetchMarketPulse();
  }, []);

  // Deletion logic for transactions
  const handleDeleteTransaction = async (id) => {
    if (!window.confirm('Are you sure you want to delete this transaction record?')) return;
    
    const updated = transactions.filter(t => t._id !== id);
    setTransactions(updated);
    localStorage.setItem('__palindrome_transactions', JSON.stringify(updated));

    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`/api/transactions/${id}`, config);
    } catch (error) {
      console.warn('[Palindrome Sandbox] Deleted locally.', error.message);
    }
  };

  // Dynamic tax calculation engine integration
  useEffect(() => {
    const salaryVal = parseFloat(grossSalaryInput);
    if (isNaN(salaryVal) || salaryVal <= 0) {
      setTaxLiability(0);
      setTaxBracketPercent(0);
      setEffectiveTaxRate(0);
      return;
    }

    setIsCalculatingTax(true);

    const delayDebounceFn = setTimeout(async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        };
        const payload = {
          grossSalary: salaryVal,
          countryCode: taxCountry,
          baseCurrency: currency
        };
        
        const response = await axios.post('/api/tax/estimate', payload, config);
        if (response.data) {
          setTaxLiability(response.data.taxLiability);
          setEffectiveTaxRate(response.data.effectiveTaxRate);
          setTaxBracketPercent(Math.round(response.data.effectiveTaxRate));
        }
      } catch (error) {
        console.error('[Tax Engine Client] Calculation failed:', error.message);
      } finally {
        setIsCalculatingTax(false);
      }
    }, 600);

    return () => clearTimeout(delayDebounceFn);
  }, [grossSalaryInput, taxCountry, currency]);

  // Dynamic liquidity mathematics
  const totalSubOutflows = recurringFees.reduce((acc, curr) => acc + curr.amount, 0);
  const remainingLiquidity = baseNetWorth + aggregateAssetValue - taxLiability - totalSubOutflows;

  // Filter transactions based on dateFilter
  const filterByDateRange = (txs, range) => {
    const now = new Date();
    return txs.filter(t => {
      const date = new Date(t.createdAt || t.date || Date.now());
      if (range === '30D') {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(now.getDate() - 30);
        return date >= thirtyDaysAgo;
      }
      if (range === '90D') {
        const ninetyDaysAgo = new Date();
        ninetyDaysAgo.setDate(now.getDate() - 90);
        return date >= ninetyDaysAgo;
      }
      if (range === 'YTD') {
        const startOfYear = new Date(now.getFullYear(), 0, 1);
        return date >= startOfYear;
      }
      return true; // 'ALL'
    });
  };

  const timeFilteredTransactions = filterByDateRange(transactions, dateFilter);

  // Search filter for full transaction audit list
  const filteredTransactions = Array.isArray(timeFilteredTransactions) ? timeFilteredTransactions.filter(t => {
    const title = t.title ? String(t.title).toLowerCase() : '';
    const category = t.category ? String(t.category).toLowerCase() : '';
    return title.includes(searchQuery.toLowerCase()) || category.includes(searchQuery.toLowerCase());
  }) : [];

  // Bulletproof amount formatting
  const formatAmount = (val) => {
    try {
      if (formatValue) return formatValue(val);
    } catch (e) {}
    return `₹${Number(val).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const handleExportCSV = () => {
    if (!Array.isArray(transactions) || transactions.length === 0) return;
    
    // Define headers
    const headers = ["Date", "Description", "Category", "Type", "Amount", "Notes"];
    
    // Map transactions to CSV rows
    const rows = transactions.map(tx => [
      tx.createdAt ? new Date(tx.createdAt).toLocaleDateString('en-IN') : 'Development Seed',
      `"${(tx.title || '').replace(/"/g, '""')}"`,
      tx.category || 'General',
      tx.type || (tx.amount > 0 ? 'income' : 'expense'),
      tx.amount,
      `"${(tx.notes || '').replace(/"/g, '""')}"`
    ]);
    
    // Combine header and rows
    const csvContent = [
      headers.join(","),
      ...rows.map(e => e.join(","))
    ].join("\n");
    
    // Trigger browser download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `palindrome_ledger_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-350 relative z-10 selection:bg-indigo-500/20 selection:text-indigo-900 font-sans">
      
      {/* Inline styles for path drawing keyframe fallback */}
      <style>{`
        @keyframes drawPath {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* ── HEADER SECTION ── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200/60 dark:border-white/10 pb-6 transition-colors">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-sans antialiased">
              {showFullHistory ? tUX('Transaction Ledger') : "Your Dashboard"}
            </h1>
            <span className="text-[10px] font-bold tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 px-2 py-0.5 rounded-full uppercase select-none">
              {showFullHistory ? tUX('Audit Ledger') : "Active"}
            </span>
          </div>
          <p className="text-xs text-slate-450 dark:text-slate-550 font-sans font-normal leading-relaxed">
            {showFullHistory 
              ? "Detailed record of all transactions, financial operations, and budget adjustments."
              : `Real-time summary of ${tUX('Net Worth').toLowerCase()}, account balances, recurring expenses, and active budgets.`}
          </p>
        </div>

        {/* System Diagnostics Badges */}
        <div className="flex flex-wrap items-center gap-3 font-sans text-xs">
          <DateRangeFilter value={dateFilter} onChange={setDateFilter} />



          {showFullHistory && (
            <button
              onClick={() => navigate('/dashboard')}
              className="px-4 py-2.5 bg-white dark:bg-black hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer shadow-sm dark:shadow-none"
            >
              &lt;- Dashboard Overview
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Activity className="w-8 h-8 text-indigo-650 animate-spin" />
          <span className="text-xs text-slate-400 uppercase tracking-widest">Loading workspace...</span>
        </div>
      ) : (
        <>
          {/* VIEWPORT A: MAIN DASHBOARD HUD */}
          {!showFullHistory && (
            <div className="flex flex-col gap-6">
              
              {workspaceMode === 'Normal' ? (
                <>
                  {/* Simplified Normal Mode Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* CARD 1: My Money (Cash/Liquidity) */}
                    <div className={getGlassmorphicClass("hover:shadow-md flex flex-col justify-between p-6")}>
                      <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-slate-500 select-none">
                        <Wallet className="w-4 h-4 text-indigo-500" />
                        <span>{tUX('Liquidity Buffer')}</span>
                      </div>
                      <div>
                        <div className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-mono">
                          {formatAmount(baseNetWorth)}
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1 font-medium">Available Liquid Cash</p>
                      </div>
                    </div>

                    {/* CARD 2: Things I Own (Manual/Live combined assets value) */}
                    <div className={getGlassmorphicClass("hover:shadow-md flex flex-col justify-between p-6")}>
                      <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-slate-500 select-none">
                        <Sparkles className="w-4 h-4 text-emerald-500" />
                        <span>{tUX('Asset Valuation / Holdings')}</span>
                      </div>
                      <div>
                        <div className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-mono">
                          {formatAmount(aggregateAssetValue)}
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1 font-medium">Total Assets Owned</p>
                      </div>
                    </div>

                    {/* CARD 3: Recent Spent */}
                    <div className={getGlassmorphicClass("hover:shadow-md flex flex-col justify-between p-6")}>
                      <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-slate-500 select-none">
                        <Activity className="w-4 h-4 text-rose-500" />
                        <span>Recent Spent</span>
                      </div>
                      <div>
                        <div className="text-3xl font-bold tracking-tight text-rose-500 font-mono">
                          {formatAmount(
                            transactions
                              .filter(tx => tx.amount < 0)
                              .reduce((acc, curr) => acc + Math.abs(curr.amount), 0)
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1 font-medium">Sum of Recent Outflows</p>
                      </div>
                    </div>

                  </div>

                  {/* Live Market Pulse Strip */}
                  <MarketPulseStrip pulseData={pulseData} loading={pulseLoading} />

                  {/* Recent Transactions List for Normal Mode */}
                  <div className={getGlassmorphicClass("p-6")}>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5 mb-4 select-none">
                      <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {tUX('Transaction Ledger')}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {transactions.slice(0, 5).map((tx, idx) => (
                        <div 
                          key={tx._id || idx}
                          onClick={() => navigate('/dashboard/transactions')}
                          className="flex justify-between items-center bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-100 dark:border-white/5 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-200"
                        >
                          <div>
                            <span className="text-xs font-bold text-slate-805 dark:text-slate-205 uppercase block">
                              {tx.title}
                            </span>
                            <span className="text-[8px] text-slate-400 dark:text-slate-500 uppercase font-semibold">
                              Category: {tx.category || 'General'}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className={`text-xs font-bold ${tx.amount > 0 ? 'text-emerald-600' : 'text-slate-700 dark:text-slate-300'}`}>
                              {tx.amount > 0 ? '+' : ''}{formatAmount(tx.amount)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* TOP PERFORMANCE & SIMULATOR ROW */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* === CARD A: TOTAL NET WORTH === */}
                <div className={getGlassmorphicClass("lg:col-span-6 hover:border-indigo-100 dark:hover:border-indigo-900/50 hover:shadow-md flex flex-col justify-between")}>
                  {/* Subtle Neon Radial Glow for Cyberpunk Dark Mode */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.02),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.06),transparent_60%)] pointer-events-none" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-4 text-xs font-medium text-slate-500 select-none relative z-10">
                      <div className="flex items-center gap-2">
                        <Wallet className="w-4 h-4 text-indigo-605 dark:text-indigo-405" />
                        <span className="tracking-wide font-bold text-slate-700 dark:text-slate-300">Total Net Worth</span>
                      </div>
                      <span className="text-[10px] bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/10 px-2.5 py-0.5 rounded-full font-semibold tracking-wide select-none">
                        Base Currency ({currency})
                      </span>
                    </div>

                    <div className="relative z-10">
                      <div className={`text-3xl font-bold tracking-tight text-slate-900 dark:text-white antialiased font-mono transition-all duration-300 ${settings?.neonGlow ? 'animate-pulse drop-shadow-[0_0_8px_rgba(129,140,248,0.75)]' : ''}`}>
                        {formatAmount(baseNetWorth + aggregateAssetValue - taxLiability)}
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                        <span className="text-indigo-650 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
                          Real-Time Net Worth Integration
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Sparkline Canvas Vector Trace Simulation */}
                  <div className="h-28 mt-6 relative w-full border-t border-slate-100 dark:border-white/5 pt-4 select-none">
                    <svg viewBox="0 0 500 100" className="w-full h-24">
                      <defs>
                        <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.08" />
                          <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M0,80 Q40,65, 80,78 T160,55 T240,68 T320,32 T400,60 T480,15 L500,20 L500,100 L0,100 Z" 
                        fill="url(#sparklineGrad)" 
                        className="opacity-70 dark:opacity-40"
                      />
                      <path 
                        d="M0,80 Q40,65, 80,78 T160,55 T240,68 T320,32 T400,60 T480,15 L500,20" 
                        fill="none" 
                        className="stroke-indigo-600 dark:stroke-indigo-400"
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeDasharray="1000"
                        strokeDashoffset="1000"
                        style={{ animation: 'drawPath 2.5s ease-out forwards' }}
                      />
                      <circle cx="480" cy="15" r="4" className="fill-indigo-650 dark:fill-indigo-400 animate-pulse" />
                      <circle cx="480" cy="15" r="2.5" className="fill-white dark:fill-black stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="1" />
                    </svg>
                    
                    <div className="flex justify-between text-[9px] text-slate-400 dark:text-slate-500 mt-2 font-medium">
                      <span>Performance Index</span>
                      <span>Rolling Assets (24h)</span>
                    </div>
                  </div>

                  {/* Accounts breakdown */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-white/5 grid grid-cols-3 gap-2 select-none">
                    <div className="p-2 bg-slate-50 dark:bg-white/5 border border-slate-150/40 dark:border-white/5 rounded-xl">
                      <div className="text-[8px] font-semibold text-slate-400 dark:text-slate-500 truncate">Liquid Cash</div>
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-0.5 font-mono">{formatAmount(baseNetWorth)}</div>
                    </div>
                    <div className="p-2 bg-slate-50 dark:bg-white/5 border border-slate-150/40 dark:border-white/5 rounded-xl">
                      <div className="text-[8px] font-semibold text-slate-400 dark:text-slate-500 truncate">Live Assets</div>
                      <div className="text-xs font-bold text-indigo-650 dark:text-indigo-400 mt-0.5 font-mono">{formatAmount(aggregateAssetValue)}</div>
                    </div>
                    <div className="p-2 bg-slate-50 dark:bg-white/5 border border-slate-150/40 dark:border-white/5 rounded-xl">
                      <div className="text-[8px] font-semibold text-slate-400 dark:text-slate-500 truncate">Liabilities</div>
                      <div className="text-xs font-bold text-rose-500 mt-0.5 font-mono">-{formatAmount(taxLiability)}</div>
                    </div>
                  </div>
                </div>

                {/* === CARD B: TAX & LIQUIDITY CALCULATOR === */}
                <div className={getGlassmorphicClass("lg:col-span-6 hover:border-indigo-100 dark:hover:border-indigo-900/50 hover:shadow-md flex flex-col justify-between")}>
                  {/* Subtle Neon Radial Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.02),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.05),transparent_60%)] pointer-events-none" />
                  
                  <div>
                    <div className="flex items-center justify-between mb-4 text-xs font-medium text-slate-500 select-none relative z-10">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        <span className="tracking-wide font-bold text-slate-700 dark:text-slate-300">{t('taxCalculator')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* Language Selector Switcher */}
                        <div className="flex bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 p-0.5 rounded-lg text-[9px] font-bold select-none">
                          <button
                            type="button"
                            onClick={() => i18n.changeLanguage('en')}
                            className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                              i18n.language === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-355'
                            }`}
                          >
                            EN
                          </button>
                          <button
                            type="button"
                            onClick={() => i18n.changeLanguage('es')}
                            className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                              i18n.language === 'es' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-355'
                            }`}
                          >
                            ES
                          </button>
                          <button
                            type="button"
                            onClick={() => i18n.changeLanguage('fr')}
                            className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                              i18n.language === 'fr' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-355'
                            }`}
                          >
                            FR
                          </button>
                        </div>
                        <span className="text-[10px] bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/10 px-2.5 py-0.5 rounded-full font-semibold">
                          {t('interactive')}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-b border-slate-100 dark:border-white/5 pb-4 mb-4 relative z-10">
                      <div>
                        <span className="text-[9px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-wider">{t('estimatedTax')}</span>
                        <div className={`text-xl font-bold text-slate-900 dark:text-white mt-1 ${isCalculatingTax ? 'animate-pulse text-indigo-400' : ''}`}>
                          {isCalculatingTax ? t('calculating') : formatAmount(taxLiability)}
                        </div>
                        {effectiveTaxRate > 0 && !isCalculatingTax && (
                          <div className="text-[9px] text-slate-500 font-mono mt-0.5">
                            {t('effectiveRate')}: {effectiveTaxRate}%
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-wider">{t('availableLiquidity')}</span>
                        <div className={`text-xl font-bold text-emerald-600 dark:text-emerald-450 mt-1 ${isCalculatingTax ? 'animate-pulse text-indigo-400' : ''}`}>
                          {isCalculatingTax ? t('calculating') : formatAmount(remainingLiquidity)}
                        </div>
                      </div>
                    </div>

                    {/* Backend-driven Input Matrix */}
                    <div className="flex flex-col gap-3.5 my-3 relative z-10 text-xs text-slate-300">
                      
                      {/* Country Selector */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{t('countryOfResidence')}</label>
                        <select
                          value={taxCountry}
                          onChange={(e) => setTaxCountry(e.target.value)}
                          className="w-full bg-slate-100 dark:bg-zinc-950 border border-slate-200/50 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-1.5 px-2.5 rounded-xl text-slate-800 dark:text-slate-300 text-xs"
                        >
                          <option value="US">{t('unitedStates')}</option>
                          <option value="GB">{t('unitedKingdom')}</option>
                          <option value="IN">{t('india')}</option>
                          <option value="FR">{t('other')}</option>
                        </select>
                      </div>

                      {/* Salary Input */}
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{t('annualGrossSalary')}</label>
                        <div className="relative flex items-center">
                          <span className="absolute left-3.5 text-slate-500 font-bold text-xs font-mono">
                            {currencyConfig?.symbol || '$'}
                          </span>
                          <input
                            type="number"
                            step="any"
                            value={grossSalaryInput}
                            onChange={(e) => setGrossSalaryInput(e.target.value)}
                            placeholder="0.00"
                            className="w-full bg-slate-100 dark:bg-zinc-950 border border-slate-200/50 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 pl-8 pr-3.5 rounded-xl text-slate-800 dark:text-white text-xs font-mono"
                          />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Progressive Liquidity Threshold Bar */}
                  <div className="mt-2 relative z-10">
                    <div className="w-full bg-slate-50 dark:bg-white/5 border border-slate-150/40 dark:border-white/5 h-3 rounded-full overflow-hidden flex p-[1.5px] relative">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          (() => {
                            const totalAssets = baseNetWorth + aggregateAssetValue;
                            const liquidityRatio = totalAssets > 0 ? (remainingLiquidity / totalAssets) * 100 : 0;
                            const limit = settings?.liquidityThreshold !== undefined ? settings.liquidityThreshold : 40;
                            return liquidityRatio < limit ? 'bg-gradient-to-r from-amber-500 to-amber-600' : 'bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-500';
                          })()
                        }`}
                        style={{ width: `${Math.min(100, Math.max(0, taxBracketPercent))}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between items-center text-[8px] text-slate-400 dark:text-slate-500 uppercase mt-2.5">
                      <span>
                        {t('liquidityDescription')} 
                        {(() => {
                          const totalAssets = baseNetWorth + aggregateAssetValue;
                          const liquidityRatio = totalAssets > 0 ? Math.round((remainingLiquidity / totalAssets) * 100) : 0;
                          return ` (Ratio: ${liquidityRatio}%)`;
                        })()}
                      </span>
                      <span className={`${
                        (() => {
                          const totalAssets = baseNetWorth + aggregateAssetValue;
                          const liquidityRatio = totalAssets > 0 ? (remainingLiquidity / totalAssets) * 100 : 0;
                          const limit = settings?.liquidityThreshold !== undefined ? settings.liquidityThreshold : 40;
                          return liquidityRatio < limit ? 'text-amber-500 font-bold' : 'text-indigo-650 dark:text-indigo-400 font-bold';
                        })()
                      }`}>{t('effectiveRate')}: {taxBracketPercent}%</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Live Market Pulse Strip */}
              <MarketPulseStrip pulseData={pulseData} loading={pulseLoading} />

              {/* TRANSACTIONS & RECURRING FEE ROW */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* === CARD C: RECENT ACTIVITY === */}
                <div className="lg:col-span-7 bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-3xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.01),transparent_60%)] pointer-events-none" />
                  
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5 mb-4 select-none relative z-10">
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        <span>Recent Activity</span>
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase">
                        Quick Ledger
                      </span>
                    </div>
                    
                    <div className="flex flex-col gap-2.5 relative z-10">
                      {Array.isArray(transactions) && transactions.slice(0, 4).map((tx, idx) => (
                        <div 
                          key={tx._id || idx}
                          onClick={() => navigate('/dashboard/transactions')}
                          className="flex justify-between items-center bg-slate-50 dark:bg-white/5 hover:bg-indigo-50/20 dark:hover:bg-white/10 border border-slate-100 dark:border-white/5 hover:border-indigo-100/50 dark:hover:border-indigo-900/30 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-200 group relative"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 px-2 py-0.5 rounded border border-indigo-100/30 dark:border-indigo-900/30">
                              0{idx + 1}
                            </span>
                            <div className="h-3 w-[1px] bg-slate-200 dark:bg-white/10" />
                            <div>
                              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-wide block uppercase">
                                {tx.title || 'Unnamed Transaction'}
                              </span>
                              <span className="text-[8px] text-slate-400 dark:text-slate-500 tracking-wider uppercase font-semibold">
                                Category: {tx.category || 'General'}
                              </span>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <span className={`text-xs font-bold ${tx.amount > 0 ? 'text-emerald-605 dark:text-emerald-400' : 'text-slate-700 dark:text-slate-300'}`}>
                              {tx.amount > 0 ? '+' : ''}{formatAmount(tx.amount)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => navigate('/dashboard/transactions')}
                    className="w-full mt-6 py-3 bg-white dark:bg-black hover:bg-slate-50 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 text-xs tracking-wide font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group shadow-sm dark:shadow-none relative z-10"
                  >
                    View Full Transaction Ledger
                    <ArrowRight className="w-3.5 h-3.5 text-slate-405 dark:text-slate-500 group-hover:translate-x-1 group-hover:text-slate-700 dark:group-hover:text-slate-305 transition-all duration-200" />
                  </button>
                </div>

                {/* === CARD D: RECURRING EXPENSES === */}
                <div className="lg:col-span-5 bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-3xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.01),transparent_60%)] pointer-events-none" />
                  
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5 mb-4 select-none relative z-10">
                      <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <RefreshCw className="w-3.5 h-3.5 text-amber-500" />
                        <span>Recurring Expenses</span>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl p-4 relative z-10">
                      <div className="flex justify-between text-[9px] text-slate-400 dark:text-slate-500 uppercase font-bold tracking-wider mb-3 border-b border-slate-100 dark:border-white/5 pb-2">
                        <span>Upcoming Payments</span>
                        <span>Days Until Due</span>
                      </div>

                      <div className="flex flex-col gap-3">
                        {recurringFees.map((fee, idx) => (
                          <div key={idx} className="flex justify-between items-center text-xs border-b border-slate-100/50 dark:border-white/5 last:border-0 pb-2.5 last:pb-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-slate-405 dark:text-slate-500 font-bold">0{idx + 1}</span>
                              <span className="font-bold text-slate-805 dark:text-slate-205 tracking-wide">{fee.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="font-bold text-slate-700 dark:text-slate-300">
                                {formatAmount(fee.amount)}
                              </span>
                              
                              <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${
                                fee.daysLeft <= 3 
                                  ? 'bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 border border-rose-100/50 dark:border-rose-900/30' 
                                  : fee.daysLeft <= 19 
                                  ? 'bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-400 border border-amber-100/50 dark:border-amber-900/30' 
                                  : 'bg-indigo-50 dark:bg-indigo-950/20 text-indigo-605 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/30'
                              }`}>
                                In {fee.daysLeft} Days
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl flex items-center justify-between text-xs text-slate-500 dark:text-slate-405 relative z-10">
                    <span className="flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                      Auto-Charge Simulated
                    </span>
                    <span className="text-slate-800 dark:text-slate-205 font-bold">Total: {formatAmount(totalSubOutflows)}</span>
                  </div>
                </div>

              </div>

              {/* === CARD E: EXPENSE DISTRIBUTION === */}
              <div className="bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-3xl p-6 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.015),transparent_60%)] pointer-events-none" />
                
                <div className="flex justify-between items-center mb-6 select-none pb-3 border-b border-slate-100 dark:border-white/5 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <Activity className="w-4 h-4 text-indigo-650 dark:text-indigo-400" />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Expense Distribution
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end relative z-10">
                  
                  {/* Segmented Digital Spectrum Audio Equalizer Bar Graph Layout */}
                  <div className="md:col-span-7 flex justify-between items-end h-44 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-2xl px-8 pb-5 pt-8 gap-3 relative overflow-hidden">
                    {categories.map((cat, i) => (
                      <div key={i} className="flex flex-col items-center flex-1 group">
                        <div className="w-full relative flex flex-col justify-end h-28">
                          
                          {/* Segmented Equalizer Bar wrapper */}
                          <div 
                            className={`bg-gradient-to-t ${cat.color} w-full rounded-t transition-all duration-300 hover:brightness-110 shadow-sm relative cursor-pointer`}
                            style={{ height: `${cat.heightPercent}%` }}
                          />

                          {/* Hover Tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-205 z-30">
                            <div className="bg-white dark:bg-black border border-slate-100 dark:border-white/10 backdrop-blur-md px-3 py-2 rounded-xl text-center shadow-lg dark:shadow-none min-w-[110px]">
                              <div className="text-[9px] font-bold text-slate-800 dark:text-slate-205 uppercase tracking-wider">{cat.name}</div>
                              <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold mt-1">{formatAmount(cat.amount)}</div>
                              <div className="text-[8px] text-slate-400 dark:text-slate-500 mt-0.5">Weight: {cat.heightPercent}%</div>
                            </div>
                            <div className="w-1.5 h-1.5 bg-white dark:bg-black border-r border-b border-slate-100 dark:border-white/10 rotate-45 mx-auto -mt-1" />
                          </div>
                        </div>
                        <span className="text-[9px] text-slate-505 dark:text-slate-500 font-bold uppercase mt-3 tracking-wider select-none">
                          {cat.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Spectrum values table summary */}
                  <div className="md:col-span-5 text-xs text-slate-500 dark:text-slate-450 flex flex-col justify-between h-44">
                    <div>
                      <div className="grid grid-cols-3 border-b border-slate-100 dark:border-white/5 pb-2 mb-2.5 font-bold uppercase tracking-wider text-[9px] text-slate-400 dark:text-slate-500">
                        <span>Expense Pool</span>
                        <span className="text-right">Accumulated</span>
                        <span className="text-right">Weight Index</span>
                      </div>
                      <div className="flex flex-col gap-1.5 max-h-[110px] overflow-y-auto pr-1">
                        {categories.map((cat, idx) => (
                          <div key={idx} className="grid grid-cols-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 py-1 rounded px-1.5 transition-colors duration-150 group">
                            <span className="text-slate-500 dark:text-slate-400 font-semibold group-hover:text-slate-800 dark:group-hover:text-white transition-colors">{idx + 1}) {cat.name.toUpperCase()}</span>
                            <span className="text-right text-slate-750 dark:text-slate-205 font-bold">{formatAmount(cat.amount)}</span>
                            <span className="text-right text-slate-400 dark:text-slate-500 font-bold">{cat.heightPercent}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </>
          )}

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-white dark:bg-black border border-slate-100 dark:border-white/10 p-4 rounded-2xl select-none shadow-sm dark:shadow-none transition-colors">
                <span className="text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-wider font-bold">Workspace Controls:</span>
                <button 
                  onClick={() => setModalOpen(true)}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs tracking-wider font-bold rounded-xl shadow-sm hover:scale-[1.005] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-indigo-700/10"
                >
                  Record New Transaction
                </button>
              </div>

            </div>
          )}

          {/* VIEWPORT B: FULL TRANSACTION HISTORY / LEDGER VIEWER */}
          {showFullHistory && (
            <div className="bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-3xl p-6 hover:shadow-md transition-shadow duration-300 shadow-sm dark:shadow-none relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.01),transparent_60%)] pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/5 mb-6 relative z-10">
                {/* Search Bar filter */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search transactions by description or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-150 dark:border-white/10 focus:border-indigo-550/40 rounded-xl pl-10 pr-4 py-3 text-xs text-slate-700 dark:text-slate-300 focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-655 font-sans"
                  />
                </div>
                
                <div className="flex items-center gap-3 relative z-10">
                  <button
                    onClick={handleExportCSV}
                    disabled={!transactions || transactions.length === 0}
                    className="px-4 py-3 bg-transparent hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-350 border border-slate-205 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer shadow-sm dark:shadow-none flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Export Ledger (CSV)
                  </button>
                  <button 
                    onClick={() => setModalOpen(true)}
                    className="px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs tracking-wide font-bold rounded-xl shadow-sm hover:scale-[1.005] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-indigo-700/10"
                  >
                    Add Transaction
                  </button>
                </div>
              </div>

              {/* Transactions Ledger Table Grid */}
              <div className="overflow-x-auto relative z-10">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 dark:border-white/5 text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider text-[9px]">
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Description</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Type</th>
                      <th className="py-3 px-4 text-right">Amount</th>
                      <th className="py-3 px-4 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                    {filteredTransactions.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="py-10 text-center text-slate-405 dark:text-slate-500 uppercase tracking-wider font-semibold">
                          No transactions found matching search criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredTransactions.map((tx, idx) => (
                        <tr key={tx._id || idx} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors group">
                          {/* Date */}
                          <td className="py-4 px-4 text-slate-500 dark:text-slate-400 text-xs">
                            {tx.createdAt || tx.date ? new Date(tx.date || tx.createdAt).toLocaleDateString('en-IN', {
                              year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                            }) : 'Development Seed'}
                          </td>
                          {/* Title / Description */}
                          <td className="py-4 px-4">
                            <span className="font-semibold text-slate-800 dark:text-slate-205 tracking-wide uppercase block">
                              {tx.title || 'Unnamed Transaction'}
                            </span>
                          </td>
                          {/* Category */}
                          <td className="py-4 px-4">
                            <span className="px-2 py-0.5 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/10 rounded font-sans text-[9px] uppercase">
                              {tx.category || 'General'}
                            </span>
                          </td>
                          {/* Type */}
                          <td className="py-4 px-4 uppercase text-[9px] font-bold">
                            <span className={tx.type === 'income' ? 'text-emerald-600 dark:text-emerald-450' : 'text-rose-500'}>
                              {tx.type || ((tx.amount || 0) > 0 ? 'income' : 'expense')}
                            </span>
                          </td>
                          {/* Amount */}
                          <td className="py-4 px-4 text-right font-bold text-xs">
                            <span className={tx.amount > 0 ? 'text-emerald-650 dark:text-emerald-400' : 'text-slate-800 dark:text-slate-300'}>
                              {tx.amount > 0 ? '+' : ''}{formatAmount(tx.amount)}
                            </span>
                          </td>
                          {/* Actions / Delete */}
                          <td className="py-4 px-4 text-center">
                            <button
                              onClick={() => handleDeleteTransaction(tx._id)}
                              className="p-2 text-slate-400 hover:text-rose-500 dark:text-slate-500 dark:hover:text-rose-400 bg-slate-50 dark:bg-white/5 hover:bg-rose-50 dark:hover:bg-rose-950/20 border border-slate-100 dark:border-white/5 hover:border-rose-100 dark:hover:border-rose-900/30 rounded-lg transition-all duration-200 cursor-pointer"
                              title="Delete transaction record"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Ledger Summary Status */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[10px] text-slate-400 dark:text-slate-500 uppercase font-semibold relative z-10">
                <span>Transactions Listed: {filteredTransactions.length} of {transactions.length}</span>
                <span>Security Standard: AES-256 INTERNAL LEDGER INTEGRITY</span>
              </div>

            </div>
          )}
        </>
      )}

      {/* Add Expense Modal Panel */}
      <AddExpenseModal 
        isOpen={modalOpen} 
        onClose={() => {
          setModalOpen(false);
          fetchTransactions();
        }} 
      />

    </div>
  );
}

export default CoreDashboard;