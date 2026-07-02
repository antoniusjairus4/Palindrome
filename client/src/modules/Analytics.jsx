import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Cell, CartesianGrid 
} from 'recharts';
import { 
  TrendingUp, ArrowUpRight, ArrowDownRight, Activity, 
  Database, HelpCircle, CheckCircle 
} from 'lucide-react';
import EmptyState from '../components/EmptyState';
import { useTheme } from '../context/ThemeContext';
import { useCurrency } from '../context/CurrencyContext';

const MOCK_MONTHLY_DATA = [
  { name: 'Jan', Income: 85000, Expenses: 42000 },
  { name: 'Feb', Income: 95000, Expenses: 48000 },
  { name: 'Mar', Income: 92000, Expenses: 51000 },
  { name: 'Apr', Income: 105000, Expenses: 45000 },
  { name: 'May', Income: 110000, Expenses: 62000 },
  { name: 'Jun', Income: 124578, Expenses: 58000 },
];

const MOCK_CATEGORIES = [
  { name: 'Fuel', amount: 8750, color: '#6366f1' },
  { name: 'Food', amount: 6200, color: '#f43f5e' },
  { name: 'Travel', amount: 4100, color: '#f59e0b' },
  { name: 'Shopping', amount: 3200, color: '#a855f7' },
  { name: 'Misc', amount: 1200, color: '#10b981' },
];

// Adaptive Tooltip for Recharts
const CustomTooltip = ({ active, payload, label, formatValue }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 dark:bg-black/95 border border-slate-100 dark:border-white/10 p-3 rounded-lg shadow-xl backdrop-blur-md">
        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-xs font-bold font-mono" style={{ color: entry.color || entry.fill }}>
            {entry.name}: {formatValue ? formatValue(entry.value) : entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

import DateRangeFilter from '../components/DateRangeFilter';
import { useUXMode } from '../context/UXModeContext';

export default function Analytics() {
  const { theme } = useTheme();
  const { workspaceMode, tUX } = useUXMode();
  const { formatValue, config } = useCurrency();
  const symbol = config?.symbol || '₹';
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [demoMode, setDemoMode] = useState(true); // Toggled to test mock vs live database state
  const [dateFilter, setDateFilter] = useState('ALL');

  useEffect(() => {
    const fetchRealData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const res = await axios.get('/api/transactions', config);
        if (Array.isArray(res.data)) {
          setTransactions(res.data);
        }
      } catch (err) {
        console.warn('Analytics API offline, loading cache');
        const cached = localStorage.getItem('__palindrome_transactions') || localStorage.getItem('__curie_transactions');
        if (cached) {
          try {
            setTransactions(JSON.parse(cached));
          } catch (e) {}
        }
      } finally {
        setLoading(false);
      }
    };
    fetchRealData();
  }, []);

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

  const filteredTransactions = filterByDateRange(transactions, dateFilter);

  // Compute real monthly datasets from loaded transactions
  const getRealMonthlyData = () => {
    if (filteredTransactions.length === 0) return [];
    
    // Sort chronologically
    const sorted = [...filteredTransactions].sort((a, b) => new Date(a.createdAt || a.date) - new Date(b.createdAt || b.date));
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthlyMap = {};

    sorted.forEach(t => {
      const date = new Date(t.createdAt || t.date);
      const monthName = months[date.getMonth()];
      if (!monthlyMap[monthName]) {
        monthlyMap[monthName] = { name: monthName, Income: 0, Expenses: 0 };
      }
      
      const amount = Math.abs(t.amount);
      if (t.type === 'income') {
        monthlyMap[monthName].Income += amount;
      } else {
        monthlyMap[monthName].Expenses += amount;
      }
    });

    // Sort according to chronological month index to avoid jumbled graphs
    return Object.values(monthlyMap);
  };

  // Compute real category breakdown from loaded transactions
  const getRealCategoryData = () => {
    const categoryMap = {};
    filteredTransactions
      .filter(t => t.type === 'expense')
      .forEach(t => {
        const cat = t.category || 'Misc';
        if (!categoryMap[cat]) {
          categoryMap[cat] = { name: cat, amount: 0 };
        }
        categoryMap[cat].amount += Math.abs(t.amount);
      });

    const colors = ['#6366f1', '#f43f5e', '#f59e0b', '#a855f7', '#10b981', '#64748b'];
    return Object.values(categoryMap)
      .sort((a, b) => b.amount - a.amount)
      .map((item, index) => ({
        ...item,
        color: colors[index % colors.length]
      }));
  };

  const chartData = demoMode ? MOCK_MONTHLY_DATA : getRealMonthlyData();
  const categoryData = demoMode ? MOCK_CATEGORIES : getRealCategoryData();
  const hasData = demoMode ? true : filteredTransactions.length >= 2;

  // Key Analytics calculations
  const totalIncome = chartData.reduce((acc, curr) => acc + (curr.Income || 0), 0);
  const totalExpenses = chartData.reduce((acc, curr) => acc + (curr.Expenses || 0), 0);
  const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome) * 100 : 0;
  const cashFlowRatio = totalExpenses > 0 ? (totalIncome / totalExpenses).toFixed(1) : '0.0';

  const formatCurrency = (val) => {
    try {
      if (formatValue) return formatValue(val);
    } catch (e) {}
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-200 font-sans">
      
      {/* Page Header block with state toggles */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">{tUX('Analytics')}</h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Graphical spending trends and trajectory analytics.</p>
        </div>

        {/* Demo vs Live switch buttons and Date Range Filter */}
        <div className="flex items-center gap-3">
          {!demoMode && <DateRangeFilter value={dateFilter} onChange={setDateFilter} />}
          
          <div className="flex bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 p-0.5 rounded-lg text-xs font-semibold">
            <button 
              onClick={() => setDemoMode(false)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                !demoMode 
                  ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm' 
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              Live Database
            </button>
            <button 
              onClick={() => setDemoMode(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                demoMode 
                  ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm' 
                  : 'text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Demo Data
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="w-full flex items-center justify-center min-h-[300px] text-slate-450 dark:text-slate-500 text-xs">
          Loading data...
        </div>
      ) : !hasData ? (
        <EmptyState 
          title="Insufficient Data" 
          description="We need at least two transactions in your history to display spending trends." 
        />
      ) : (
        <div className="flex flex-col gap-6">
          
          {/* HUD Analytics Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Savings Rate Card */}
            <div className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-5 rounded-xl shadow-sm dark:shadow-none relative overflow-hidden transition-colors">
              <div className="absolute top-0 right-0 p-3 text-slate-200 dark:text-white/5 pointer-events-none">
                <TrendingUp className="w-10 h-10 stroke-[1.5]" />
              </div>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Savings Margin</p>
              <h2 className="text-xl font-bold font-mono text-slate-800 dark:text-slate-200">{savingsRate.toFixed(1)}%</h2>
              <div className="flex items-center gap-1 mt-2 text-[10px] font-semibold text-emerald-500">
                <ArrowUpRight className="w-3 h-3" />
                <span>Target threshold: 30%</span>
              </div>
            </div>

            {/* Peak Expense Class Card */}
            <div className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-5 rounded-xl shadow-sm dark:shadow-none relative overflow-hidden transition-colors">
              <div className="absolute top-0 right-0 p-3 text-slate-200 dark:text-white/5 pointer-events-none">
                <Activity className="w-10 h-10 stroke-[1.5]" />
              </div>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Top Outflow Category</p>
              <h2 className="text-xl font-bold text-slate-850 dark:text-slate-200 truncate">
                {categoryData.length > 0 ? categoryData[0].name.toUpperCase() : 'NONE'}
              </h2>
              <div className="flex items-center gap-1 mt-2 text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                <span>Value: {categoryData.length > 0 ? formatCurrency(categoryData[0].amount) : `${symbol}0`}</span>
              </div>
            </div>

            {/* Cash Flow Index Ratio */}
            <div className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-5 rounded-xl shadow-sm dark:shadow-none relative overflow-hidden transition-colors">
              <div className="absolute top-0 right-0 p-3 text-slate-200 dark:text-white/5 pointer-events-none">
                <CheckCircle className="w-10 h-10 stroke-[1.5]" />
              </div>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Cash Flow Index</p>
              <h2 className="text-xl font-bold font-mono text-slate-800 dark:text-slate-200">{cashFlowRatio}x</h2>
              <div className={`flex items-center gap-1 mt-2 text-[10px] font-semibold ${Number(cashFlowRatio) >= 1.5 ? 'text-emerald-500' : 'text-amber-500'}`}>
                {Number(cashFlowRatio) >= 1.0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                <span>Inflows exceed outflows</span>
              </div>
            </div>

          </div>

          {/* Primary Trend Charts Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Area Line Chart: Income vs Outflow Trend */}
            <div className="lg:col-span-8 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-5 rounded-xl shadow-sm dark:shadow-none transition-colors">
              <div className="mb-4">
                <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-wide uppercase">Income vs Outflow Trajectory</h3>
                <p className="text-[10px] text-slate-400 dark:text-slate-500">Six-month comparison of active inflows and overhead burn rates.</p>
              </div>

              <div className="h-64 w-full text-xs">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                      </linearGradient>
                      <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'} />
                    <XAxis 
                      dataKey="name" 
                      stroke={theme === 'dark' ? '#475569' : '#94a3b8'} 
                      fontSize={10}
                      tickLine={false}
                    />
                    <YAxis 
                      stroke={theme === 'dark' ? '#475569' : '#94a3b8'} 
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(v) => `${symbol}${v/1000}k`}
                      width={45}
                    />
                    <Tooltip content={<CustomTooltip formatValue={formatValue} />} />
                    <Area 
                      type="monotone" 
                      dataKey="Income" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorIncome)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="Expenses" 
                      stroke="#f43f5e" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorExpense)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bar Chart: Spending Category Distribution */}
            <div className="lg:col-span-4 bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-5 rounded-xl shadow-sm dark:shadow-none transition-colors">
              <div className="mb-4">
                <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-wide uppercase">Outflow Allocations</h3>
                <p className="text-[10px] text-slate-400 dark:text-slate-500">Distribution of expenditures grouped by categorical nodes.</p>
              </div>

              {categoryData.length === 0 ? (
                <div className="h-64 flex items-center justify-center text-xs text-slate-400 dark:text-slate-500">
                  No expense categories registered
                </div>
              ) : (
                <div className="h-64 w-full text-xs">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={categoryData} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                      <XAxis 
                        type="number" 
                        stroke={theme === 'dark' ? '#475569' : '#94a3b8'} 
                        fontSize={9}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(v) => `${symbol}${v}`}
                      />
                      <YAxis 
                        dataKey="name" 
                        type="category" 
                        stroke={theme === 'dark' ? '#94a3b8' : '#475569'} 
                        fontSize={10} 
                        tickLine={false}
                        width={85}
                      />
                      <Tooltip content={<CustomTooltip formatValue={formatValue} />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
                      <Bar dataKey="amount" radius={[0, 4, 4, 0]} barSize={12}>
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>

          </div>

        </div>
      )}
    </div>
  );
}