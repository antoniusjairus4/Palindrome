import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Download, Trash2, Database, Calendar, AlertCircle } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { useUXMode } from '../context/UXModeContext';
import AddExpenseModal from './AddExpenseModal';
import DateRangeFilter from '../components/DateRangeFilter';

export default function Transactions() {
  const { formatValue } = useCurrency();
  const { workspaceMode, tUX } = useUXMode();
  const [loading, setLoading] = useState(true);
  const [dbStatus, setDbStatus] = useState('CONNECTING');
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('ALL');
  const [modalOpen, setModalOpen] = useState(false);

  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.get('/api/transactions', config);
      if (Array.isArray(res.data)) {
        setTransactions(res.data);
      }
      setDbStatus('ONLINE');
    } catch (error) {
      console.warn('[Transactions Module] API offline. Resolving local storage fallbacks.', error.message);
      const cached = localStorage.getItem('__palindrome_transactions') || localStorage.getItem('__curie_transactions');
      if (cached) {
        try {
          setTransactions(JSON.parse(cached));
        } catch (e) {}
      }
      setDbStatus('SANDBOX');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this transaction record?')) return;
    const updated = transactions.filter(t => t._id !== id);
    setTransactions(updated);
    localStorage.setItem('__palindrome_transactions', JSON.stringify(updated));

    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`/api/transactions/${id}`, config);
    } catch (e) {
      console.warn('[Transactions Module] Deleted locally.', e.message);
    }
  };

  const handleExportCSV = () => {
    if (transactions.length === 0) return;
    const headers = ["Date", "Description", "Category", "Type", "Amount", "Notes"];
    const rows = transactions.map(tx => [
      tx.createdAt || tx.date ? new Date(tx.date || tx.createdAt).toLocaleDateString('en-IN') : 'Development Seed',
      `"${(tx.title || '').replace(/"/g, '""')}"`,
      tx.category || 'General',
      tx.type || (tx.amount > 0 ? 'income' : 'expense'),
      tx.amount,
      `"${(tx.notes || '').replace(/"/g, '""')}"`
    ]);
    const csvContent = [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `palindrome_ledger_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      return true;
    });
  };

  const timeFiltered = filterByDateRange(transactions, dateFilter);
  const filtered = timeFiltered.filter(t => {
    const title = t.title ? String(t.title).toLowerCase() : '';
    const category = t.category ? String(t.category).toLowerCase() : '';
    return title.includes(searchQuery.toLowerCase()) || category.includes(searchQuery.toLowerCase());
  });

  const formatAmount = (val) => {
    try {
      if (formatValue) return formatValue(val);
    } catch (e) {}
    return `₹${Number(val).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-200 font-sans">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-205 dark:border-white/10 pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-905 dark:text-white">{tUX('Transaction Ledger')}</h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Detailed history of all processed transactions and financial mutations.</p>
        </div>
        <div className="flex items-center gap-3">
          <DateRangeFilter value={dateFilter} onChange={setDateFilter} />
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
          >
            Add Transaction
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-20 text-center text-xs text-slate-500 uppercase tracking-widest animate-pulse">
          Loading ledger entries...
        </div>
      ) : (
        <div className="bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-3xl p-6 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
          
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/5 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 dark:bg-white/5 border border-slate-150 dark:border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-700 dark:text-slate-300 focus:outline-none transition-all placeholder:text-slate-400"
              />
            </div>
             <button
               onClick={handleExportCSV}
               disabled={transactions.length === 0}
               className="px-4 py-2.5 bg-transparent hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-350 border border-slate-205 dark:border-white/10 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
             >
               <Download className="w-3.5 h-3.5" />
               Export {tUX('Transaction Ledger')} (CSV)
             </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
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
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-10 text-center text-slate-450 dark:text-slate-500 uppercase tracking-wider font-semibold">
                      No transactions recorded.
                    </td>
                  </tr>
                ) : (
                  filtered.map((tx, idx) => (
                    <tr key={tx._id || idx} className="hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors group">
                      <td className="py-4 px-4 text-slate-500 dark:text-slate-400 text-xs">
                        {tx.createdAt || tx.date ? new Date(tx.date || tx.createdAt).toLocaleDateString('en-IN', {
                          year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                        }) : 'Development Seed'}
                      </td>
                      <td className="py-4 px-4 font-semibold text-slate-805 dark:text-slate-200 uppercase">
                        {tx.title}
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-0.5 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-202 dark:border-white/10 rounded text-[9px] uppercase font-bold">
                          {tx.category || 'General'}
                        </span>
                      </td>
                      <td className="py-4 px-4 uppercase text-[9px] font-bold">
                        <span className={tx.type === 'income' ? 'text-emerald-500' : 'text-rose-500'}>
                          {tx.type || (tx.amount > 0 ? 'income' : 'expense')}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right font-mono font-bold">
                        <span className={tx.amount > 0 ? 'text-emerald-650 dark:text-emerald-400' : 'text-slate-900 dark:text-slate-200'}>
                          {tx.amount > 0 ? '+' : ''}{formatAmount(tx.amount)}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <button
                          onClick={() => handleDelete(tx._id)}
                          className="p-2 text-slate-400 hover:text-rose-500 dark:text-slate-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 border border-slate-100 dark:border-white/5 rounded-lg transition-all cursor-pointer"
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
        </div>
      )}

      {/* Add Modal */}
      <AddExpenseModal isOpen={modalOpen} onClose={() => { setModalOpen(false); fetchTransactions(); }} />

    </div>
  );
}