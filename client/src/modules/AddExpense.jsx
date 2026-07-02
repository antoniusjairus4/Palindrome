import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrency } from '../context/CurrencyContext';
import { PlusCircle, ArrowRight, RefreshCw } from 'lucide-react';

export default function AddExpense() {
  const navigate = useNavigate();
  const { config } = useCurrency();
  const [loading, setLoading] = useState(false);

  // Form State Matrices
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Development');
  const [tag, setTag] = useState('#college');
  const [notes, setNotes] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);

  const handleCommit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTitle('');
      setAmount('');
      navigate('/dashboard');
    }, 900);
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-none animate-in zoom-in-95 duration-200 font-sans">
      
      <div className="flex items-center gap-2 border-b border-slate-100 dark:border-white/5 pb-4 mb-6">
        <PlusCircle className="w-4 h-4 text-rose-500" />
        <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase">Add Expense Record</h2>
      </div>

      <form onSubmit={handleCommit} className="flex flex-col gap-5 text-xs">
        {/* Title */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Description</label>
          <input 
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Monthly cloud server costs"
            className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-slate-800 dark:text-slate-200 text-sm placeholder:text-slate-350 dark:placeholder:text-slate-700"
          />
        </div>

        {/* Amount & Tag */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Amount ({config?.symbol || '₹'})</label>
            <input 
              type="number"
              required
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-slate-800 dark:text-slate-200 text-sm placeholder:text-slate-350 dark:placeholder:text-slate-700"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Category Tag</label>
            <select 
              value={tag} 
              onChange={(e) => setTag(e.target.value)}
              className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2.5 text-slate-700 dark:text-slate-300 text-xs"
            >
              <option value="#college" className="bg-white dark:bg-black">#college</option>
              <option value="#travel" className="bg-white dark:bg-black">#travel</option>
              <option value="#tournament" className="bg-white dark:bg-black">#tournament</option>
              <option value="#subs" className="bg-white dark:bg-black">#subscriptions</option>
            </select>
          </div>
        </div>

        {/* Category Classification */}
        <div className="flex flex-col gap-1">
          <label className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Classification Tag</label>
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2.5 text-slate-700 dark:text-slate-300 text-xs"
          >
            <option value="Development" className="bg-white dark:bg-black">Development</option>
            <option value="Infrastructure" className="bg-white dark:bg-black">Infrastructure</option>
            <option value="Marketing" className="bg-white dark:bg-black">Marketing</option>
            <option value="Operations" className="bg-white dark:bg-black">Operations</option>
            <option value="Logistics" className="bg-white dark:bg-black">Tournament Logistics</option>
          </select>
        </div>

        {/* Month over Month Sub-Routine */}
        <div className="p-4 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg border transition-all ${isRecurring ? 'bg-indigo-50 dark:bg-indigo-950/20 border-indigo-100 dark:border-indigo-900/30 text-indigo-650 dark:text-indigo-400' : 'bg-white dark:bg-black border-slate-200 dark:border-white/10 text-slate-400'}`}>
              <RefreshCw className={`w-4 h-4 ${isRecurring ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Recurring Subscription</h4>
              <p className="text-[10px] text-slate-450 dark:text-slate-500 leading-normal mt-0.5">Commit this transaction automatically every month.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsRecurring(!isRecurring)}
            className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isRecurring ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-white/10'}`}
          >
            <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isRecurring ? 'translate-x-4' : 'translate-x-0'}`} />
          </button>
        </div>

        <button 
          type="submit"
          disabled={loading}
          className="w-full mt-4 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-sans tracking-wide uppercase font-bold rounded-xl shadow-sm hover:scale-[1.005] active:scale-[0.99] transition-all text-xs cursor-pointer disabled:bg-indigo-400"
        >
          {loading ? 'Adding Expense...' : 'Add Expense Record'}
        </button>
      </form>
    </div>
  );
}