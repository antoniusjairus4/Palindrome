import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Layers, Plus, Trash2, Calendar, RefreshCw, Sparkles, 
  Database, ShieldCheck, Activity, X, AlertCircle, 
  Power
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

// Helper to calculate future date relative to now
const getFutureDate = (daysAhead) => {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  return d.toISOString().split('T')[0]; // YYYY-MM-DD
};

export const Subscriptions = () => {
  const { formatValue } = useCurrency();

  // Dialog / Modal Visibility States
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dbStatus, setDbStatus] = useState('CONNECTING');
  const [latency, setLatency] = useState('12ms');

  // Ingestion Form State Variables
  const [formName, setFormName] = useState('');
  const [formAmount, setFormAmount] = useState('');
  const [formFrequency, setFormFrequency] = useState('Monthly');
  const [formNextRenewal, setFormNextRenewal] = useState('');
  const [formCategory, setFormCategory] = useState('Cloud Infrastructure');
  const [formPaymentSource, setFormPaymentSource] = useState('');
  const [formEarlyAlerts, setFormEarlyAlerts] = useState(true);

  // Active Streams State
  const [subscriptions, setSubscriptions] = useState([]);

  // Bulletproof amount formatting
  const formatAmount = (val) => {
    try {
      if (formatValue) return formatValue(val);
    } catch (e) {}
    return `₹${Number(val).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Convert subscription interval to monthly equivalent burn value
  const getMonthlyEquivalent = (sub) => {
    if (!sub.active) return 0;
    const amt = Number(sub.amount) || 0;
    switch (sub.frequency) {
      case 'Weekly': return amt * 4.33;
      case 'Quarterly': return amt / 3;
      case 'Yearly': return amt / 12;
      case 'Monthly':
      default: return amt;
    }
  };

  // Format date strings to readable output
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const d = new Date(dateString);
    return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  // Calculate remaining days and warning badge levels
  const getProximityInfo = (dateString) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const renewal = new Date(dateString);
    renewal.setHours(0, 0, 0, 0);
    
    const diffTime = renewal - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return { text: `Overdue by ${Math.abs(diffDays)}d`, color: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/20 border-rose-100/50 dark:border-rose-900/30' };
    } else if (diffDays === 0) {
      return { text: 'Today', color: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/20 border-rose-100/50 dark:border-rose-900/30 animate-pulse' };
    } else if (diffDays === 1) {
      return { text: 'Tomorrow', color: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/20 border-rose-100/50 dark:border-rose-900/30' };
    } else if (diffDays <= 7) {
      return { text: `In ${diffDays} Days`, color: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/20 border-rose-100/50 dark:border-rose-900/30' };
    } else if (diffDays <= 14) {
      return { text: `In ${diffDays} Days`, color: 'text-amber-605 dark:text-amber-400 bg-amber-55/70 dark:bg-amber-950/20 border-amber-100/50 dark:border-amber-900/30' };
    } else {
      return { text: `In ${diffDays} Days`, color: 'text-indigo-650 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/20 border-indigo-100/50 dark:border-indigo-900/30' };
    }
  };

  // Synchronize state mutations with persistent LocalStorage
  const syncLocalStorage = (updatedList) => {
    localStorage.setItem('__palindrome_subscriptions', JSON.stringify(updatedList));
  };

  // Fetch subscriptions with fallback
  const fetchSubscriptions = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      
      const res = await axios.get('/api/subscriptions', config);
      if (Array.isArray(res.data)) {
        setSubscriptions(res.data);
        syncLocalStorage(res.data);
      } else {
        throw new Error('Response not an array');
      }
      setDbStatus('ONLINE');
      setLoading(false);
    } catch (error) {
      console.warn('[Palindrome Subscriptions] API offline. Resolving local storage fallbacks.', error.message);
      
      const cached = localStorage.getItem('__palindrome_subscriptions') || localStorage.getItem('__curie_subscriptions');
      if (cached) {
        try {
          setSubscriptions(JSON.parse(cached));
        } catch (e) {
          localStorage.removeItem('__palindrome_subscriptions');
          localStorage.removeItem('__curie_subscriptions');
        }
      } else {
        const fallbacks = [
          {
            _id: 'sub_1',
            name: 'AWS CLOUD INFRA',
            amount: 8750.00,
            frequency: 'Monthly',
            nextRenewal: getFutureDate(3),
            category: 'Cloud Infrastructure',
            paymentSource: 'Credit Card *9012',
            earlyAlerts: true,
            active: true
          },
          {
            _id: 'sub_2',
            name: 'NETFLIX PREMIUM',
            amount: 649.00,
            frequency: 'Monthly',
            nextRenewal: getFutureDate(19),
            category: 'Entertainment',
            paymentSource: 'PayPal Gateway',
            earlyAlerts: false,
            active: true
          },
          {
            _id: 'sub_3',
            name: 'GITHUB COPILOT',
            amount: 850.00,
            frequency: 'Monthly',
            nextRenewal: getFutureDate(23),
            category: 'Dev Tools',
            paymentSource: 'Debit Card *4120',
            earlyAlerts: true,
            active: true
          },
          {
            _id: 'sub_4',
            name: 'ADOBE CREATIVE SUITE',
            amount: 4200.00,
            frequency: 'Monthly',
            nextRenewal: getFutureDate(28),
            category: 'SaaS Utilities',
            paymentSource: 'Credit Card *9012',
            earlyAlerts: true,
            active: false
          }
        ];
        setSubscriptions(fallbacks);
        syncLocalStorage(fallbacks);
      }
      setDbStatus('SANDBOX');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  // Latency Simulator
  useEffect(() => {
    const interval = setInterval(() => {
      const ms = Math.floor(Math.random() * 6) + 8;
      setLatency(`${ms}ms`);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Create Subscriptions
  const handleCreateDaemon = async (e) => {
    e.preventDefault();
    if (!formName || !formAmount || !formNextRenewal) return;

    const newSub = {
      _id: `sub_${Date.now()}`,
      name: formName.toUpperCase(),
      amount: parseFloat(formAmount),
      frequency: formFrequency,
      nextRenewal: formNextRenewal,
      category: formCategory,
      paymentSource: formPaymentSource || 'Unassigned Source',
      earlyAlerts: formEarlyAlerts,
      active: true
    };

    const updated = [newSub, ...subscriptions];
    setSubscriptions(updated);
    syncLocalStorage(updated);

    // Form Reset
    setFormName('');
    setFormAmount('');
    setFormNextRenewal('');
    setFormPaymentSource('');
    setModalOpen(false);

    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.post('/api/subscriptions', newSub, config);
    } catch (err) {
      console.warn('[Palindrome Sandbox] Syncing locally.', err.message);
    }
  };

  // Toggle Sub Active Status
  const handleToggleActive = async (id) => {
    const updated = subscriptions.map(sub => {
      if (sub._id === id) {
        const nextState = !sub.active;
        
        // Push status changes async
        const token = localStorage.getItem('token');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        axios.put(`/api/subscriptions/${id}`, { active: nextState }, config)
          .catch(e => console.warn('[Palindrome Sandbox] Toggled active locally only.', e.message));

        return { ...sub, active: nextState };
      }
      return sub;
    });

    setSubscriptions(updated);
    syncLocalStorage(updated);
  };

  // Terminate Sub Routine
  const handleTerminate = async (id) => {
    if (!window.confirm('Are you sure you want to terminate this recurring payment schedule?')) return;
    
    const updated = subscriptions.filter(s => s._id !== id);
    setSubscriptions(updated);
    syncLocalStorage(updated);

    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`/api/subscriptions/${id}`, config);
    } catch (err) {
      console.warn('[Palindrome Sandbox] Deleted locally.', err.message);
    }
  };

  // Analytics Aggregation calculations
  const totalBurnRate = subscriptions.reduce((sum, sub) => sum + getMonthlyEquivalent(sub), 0);
  const activeCount = subscriptions.filter(s => s.active).length;
  const pausedCount = subscriptions.filter(s => !s.active).length;
  const totalCount = subscriptions.length;

  // Next Renewal Finder (Soonest active)
  const impendingPull = [...subscriptions]
    .filter(s => s.active)
    .sort((a, b) => new Date(a.nextRenewal) - new Date(b.nextRenewal))[0];

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2 duration-350 relative z-10 font-sans">
      
      {/* ── HEADER TITLE SECTION ── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200/60 dark:border-white/10 pb-6 transition-colors">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white font-sans antialiased">
              Recurring Payment Daemons
            </h1>
            <span className="text-[10px] font-bold tracking-wider text-indigo-650 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 px-2 py-0.5 rounded-full uppercase select-none">
              Overhead streams
            </span>
          </div>
          <p className="text-xs text-slate-450 dark:text-slate-550 font-sans font-normal leading-relaxed">
            Configure, manage, and monitor recurring payments, license schedules, and daemon operations.
          </p>
        </div>

        {/* Diagnostics & Controls */}
        <div className="flex flex-wrap items-center gap-3 font-sans text-xs">
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs tracking-wide font-bold rounded-xl shadow-sm hover:scale-[1.005] active:scale-[0.99] transition-all duration-200 cursor-pointer border border-indigo-700/10 flex items-center gap-2"
          >
            <Plus className="w-3.5 h-3.5 text-white" />
            Add Recurring Expense
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Activity className="w-8 h-8 text-indigo-600 animate-spin" />
          <span className="text-xs text-slate-400 uppercase tracking-widest">Retrieving recurring schedules...</span>
        </div>
      ) : (
        <>
          {/* ── 1. HUD ANALYTICS CARDS ROW ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* CARD 1: MONTHLY BURN RATE */}
            <div className="bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-indigo-100 dark:hover:border-indigo-900/50 hover:shadow-md transition-all duration-300 shadow-sm dark:shadow-none">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.015),transparent_60%)] pointer-events-none" />
              <div className="flex justify-between items-start mb-2 select-none text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider relative z-10">
                <span>Monthly Burn Rate</span>
              </div>
              <div className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white relative z-10">
                {formatAmount(totalBurnRate)}
              </div>
              <div className="text-[10px] text-slate-400 dark:text-slate-505 mt-1.5 uppercase font-semibold relative z-10">
                Aggregate monthly stream overhead
              </div>
            </div>

            {/* CARD 2: NEXT RENEWAL */}
            <div className="bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-indigo-100 dark:hover:border-indigo-900/50 hover:shadow-md transition-all duration-300 shadow-sm dark:shadow-none">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,63,94,0.015),transparent_60%)] pointer-events-none" />
              <div className="flex justify-between items-start mb-2 select-none text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider relative z-10">
                <span>Next Renewal</span>
              </div>
              {impendingPull ? (
                <div className="relative z-10">
                  <div className="text-sm font-bold tracking-tight text-slate-800 dark:text-slate-200 truncate uppercase">
                    {impendingPull.name}
                  </div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-350 mt-1.5 flex justify-between items-center">
                    <span>{formatAmount(impendingPull.amount)}</span>
                    <span className={`text-[9px] px-2.5 py-0.5 rounded-full font-bold uppercase ${getProximityInfo(impendingPull.nextRenewal).color}`}>
                      {getProximityInfo(impendingPull.nextRenewal).text}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative z-10">
                  <div className="text-sm font-bold tracking-tight text-slate-400 dark:text-slate-600 uppercase">
                    No Upcoming Renewals
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-505 mt-1.5">
                    No active bills due within 7 days
                  </div>
                </div>
              )}
            </div>

            {/* CARD 3: ACTIVE SUBSCRIPTIONS */}
            <div className="bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-indigo-100 dark:hover:border-indigo-900/50 hover:shadow-md transition-all duration-300 shadow-sm dark:shadow-none">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.01),transparent_60%)] pointer-events-none" />
              <div className="flex justify-between items-start mb-2 select-none text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider relative z-10">
                <span>Active Subscriptions</span>
              </div>
              <div className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white relative z-10">
                {activeCount} <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">Active</span> / {pausedCount} <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">Paused</span>
              </div>
              <div className="w-full bg-slate-50 dark:bg-white/5 border border-slate-150/40 dark:border-white/5 h-2 rounded-full mt-3 overflow-hidden relative z-10">
                <div 
                  className="bg-indigo-650 dark:bg-indigo-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${totalCount > 0 ? (activeCount / totalCount) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>

          {/* ── 3. LIST CONTAINER ── */}
          <div className="bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-3xl p-6 hover:shadow-md transition-shadow duration-300 shadow-sm dark:shadow-none flex flex-col gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.01),transparent_60%)] pointer-events-none" />
            
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-white/5 select-none relative z-10">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Automated Schedules</span>
              </div>
            </div>

            {subscriptions.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center select-none relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center mb-4">
                  <span className="text-slate-400 dark:text-slate-500 text-lg font-bold">+_</span>
                </div>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 tracking-wider uppercase mb-1">No automated expenses found</h3>
                <p className="text-xs text-slate-450 dark:text-slate-500 max-w-sm leading-relaxed">
                  You currently have no automated expenses or active subscription sequences registered.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3 relative z-10">
                {subscriptions.map((sub, idx) => {
                  const proximity = getProximityInfo(sub.nextRenewal);
                  return (
                    <div 
                      key={sub._id || idx}
                      className={`flex flex-col lg:flex-row lg:items-center justify-between bg-slate-50 dark:bg-white/5 hover:bg-indigo-50/10 dark:hover:bg-white/10 border border-slate-100 dark:border-white/5 hover:border-indigo-100/50 dark:hover:border-indigo-900/30 px-5 py-4 rounded-2xl transition-all duration-200 group relative gap-4 ${sub.active ? '' : 'opacity-50'}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6 w-full">
                        {/* Index badge */}
                        <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 w-8 h-8 rounded-lg border border-indigo-100/30 dark:border-indigo-900/30 flex items-center justify-center shrink-0 select-none">
                          0{idx + 1}
                        </span>
                        
                        {/* Main Info */}
                        <div className="flex flex-col w-full">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-wide uppercase">
                              {sub.name}
                            </span>
                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-white/10 rounded font-sans text-[9px] uppercase tracking-wider select-none font-bold">
                              {sub.category || 'Utility'}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-[10px] text-slate-400 dark:text-slate-500 mt-1 flex-wrap uppercase font-bold">
                            <span>Source: {sub.paymentSource || 'Unassigned'}</span>
                            <span>•</span>
                            <span>Cycle: {sub.frequency || 'Monthly'}</span>
                            <span>•</span>
                            <span>Next Payment: {formatDate(sub.nextRenewal)}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 justify-between sm:justify-end shrink-0 w-full lg:w-auto">
                        {/* Amount */}
                        <div className="text-left sm:text-right pr-2">
                          <span className="text-sm font-bold text-slate-805 dark:text-slate-205 block">
                            {formatAmount(sub.amount)}
                          </span>
                          <span className="text-[9px] text-slate-400 dark:text-slate-500 block uppercase font-bold">
                            {sub.frequency === 'Monthly' ? 'monthly rate' : `${formatAmount(getMonthlyEquivalent(sub))}/mo eq`}
                          </span>
                        </div>

                        {/* Proximity Tag */}
                        <div className={`text-[9px] px-2.5 py-1 font-bold border rounded-full uppercase shrink-0 ${proximity.color}`}>
                          {proximity.text}
                        </div>

                        {/* Alert Flag */}
                        <div 
                          className={`w-2 h-2 rounded-full transition-colors shrink-0 ${sub.earlyAlerts && sub.active ? 'bg-indigo-500 shadow-[0_0_8px_rgba(79,70,229,0.5)]' : 'bg-slate-300 dark:bg-white/10'}`}
                          title={sub.earlyAlerts ? 'Early warnings active' : 'Warnings disabled'}
                        />

                        {/* Power Toggle */}
                        <button
                          onClick={() => handleToggleActive(sub._id)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-[10px] font-bold uppercase transition-all duration-200 cursor-pointer shrink-0 ${
                            sub.active 
                              ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-950/40 hover:bg-emerald-100/50' 
                              : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:bg-slate-200'
                          }`}
                        >
                          <Power className="w-3 h-3" />
                          {sub.active ? 'Active' : 'Paused'}
                        </button>

                        {/* Terminate button */}
                        <button
                          onClick={() => handleTerminate(sub._id)}
                          className="p-2 text-slate-450 hover:text-rose-500 dark:text-slate-550 dark:hover:text-rose-400 bg-white dark:bg-white/5 hover:bg-rose-50 dark:hover:bg-rose-950/20 border border-slate-200 dark:border-white/10 hover:border-rose-100 dark:hover:border-rose-900/30 rounded-lg transition-all duration-200 cursor-pointer shrink-0"
                          title="Terminate recurring payment"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </>
      )}

      {/* ── 2. INGESTION MODAL ── */}
      {modalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 dark:bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150 select-none">
          <div className="w-full max-w-md bg-white dark:bg-black border border-slate-150 dark:border-white/10 rounded-2xl p-6 relative shadow-xl dark:shadow-none animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setModalOpen(false)} 
              className="absolute top-5 right-5 text-slate-405 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-350 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            
            <h2 className="text-base font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-white/5 pb-3 mb-6">
              Add Recurring Expense
            </h2>

            <form onSubmit={handleCreateDaemon} className="flex flex-col gap-4 text-xs">
              
              {/* Stream Name */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Stream Name</label>
                <input 
                  type="text" 
                  required 
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. AWS CLOUD INFRA" 
                  className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-slate-800 dark:text-slate-200 text-sm placeholder:text-slate-350 dark:placeholder:text-slate-700" 
                />
              </div>

              {/* Billing Amount */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Billing Amount (₹)</label>
                <input 
                  type="number" 
                  step="0.01" 
                  required 
                  value={formAmount}
                  onChange={(e) => setFormAmount(e.target.value)}
                  placeholder="0.00" 
                  className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-slate-800 dark:text-slate-200 text-sm placeholder:text-slate-350 dark:placeholder:text-slate-700" 
                />
              </div>

              {/* Frequency & Category Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Frequency Cycle</label>
                  <select 
                    value={formFrequency}
                    onChange={(e) => setFormFrequency(e.target.value)}
                    className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2.5 text-slate-700 dark:text-slate-300 text-xs"
                  >
                    <option value="Weekly" className="bg-white dark:bg-black text-slate-800 dark:text-slate-200">Weekly</option>
                    <option value="Monthly" className="bg-white dark:bg-black text-slate-800 dark:text-slate-200">Monthly</option>
                    <option value="Quarterly" className="bg-white dark:bg-black text-slate-800 dark:text-slate-200">Quarterly</option>
                    <option value="Yearly" className="bg-white dark:bg-black text-slate-800 dark:text-slate-200">Yearly</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Classification Tag</label>
                  <select 
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2.5 text-slate-700 dark:text-slate-300 text-xs"
                  >
                    <option value="Cloud Infrastructure" className="bg-white dark:bg-black text-slate-800 dark:text-slate-200">Cloud Infrastructure</option>
                    <option value="SaaS Utilities" className="bg-white dark:bg-black text-slate-800 dark:text-slate-200">SaaS Utilities</option>
                    <option value="Entertainment" className="bg-white dark:bg-black text-slate-800 dark:text-slate-200">Entertainment</option>
                    <option value="Dev Tools" className="bg-white dark:bg-black text-slate-800 dark:text-slate-200">Dev Tools</option>
                  </select>
                </div>
              </div>

              {/* Next Renewal Date */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Next Renewal Date</label>
                <input 
                  type="date" 
                  required 
                  value={formNextRenewal}
                  onChange={(e) => setFormNextRenewal(e.target.value)}
                  className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-slate-750 dark:text-slate-300 text-xs" 
                />
              </div>

              {/* Payment Source */}
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Payment Source</label>
                <input 
                  type="text" 
                  value={formPaymentSource}
                  onChange={(e) => setFormPaymentSource(e.target.value)}
                  placeholder="e.g. Credit Card *4242" 
                  className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-slate-800 dark:text-slate-200 text-sm placeholder:text-slate-350 dark:placeholder:text-slate-700" 
                />
              </div>

              {/* Early Detection Alerts */}
              <div className="flex items-center justify-between border border-slate-100 dark:border-white/5 rounded-2xl px-4 py-3 mt-1">
                <div className="flex flex-col">
                  <span className="font-bold text-slate-700 dark:text-slate-250">Early Detection Alerts</span>
                  <span className="text-[9px] text-slate-400 dark:text-slate-500 uppercase mt-0.5 font-bold">Flag warning tags before pull</span>
                </div>
                <button
                  type="button"
                  onClick={() => setFormEarlyAlerts(!formEarlyAlerts)}
                  className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${formEarlyAlerts ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-white/10'}`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${formEarlyAlerts ? 'translate-x-4' : 'translate-x-0'}`} />
                </button>
              </div>

              <button 
                type="submit" 
                className="w-full mt-4 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-sans tracking-wide uppercase font-bold rounded-xl shadow-sm hover:scale-[1.005] active:scale-[0.99] transition-all text-xs cursor-pointer"
              >
                Initialize Subscription
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscriptions;