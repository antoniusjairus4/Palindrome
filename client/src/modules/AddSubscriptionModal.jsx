import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AddSubscriptionModal({ isOpen, onClose, onCreate }) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [nextBillingDate, setNextBillingDate] = useState(new Date().toISOString().split('T')[0]);
  const [autoCharge, setAutoCharge] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !cost) return;

    setSubmitting(true);
    
    const newSub = {
      name: name.toUpperCase().trim(),
      amount: parseFloat(cost),
      frequency: 'Monthly',
      nextRenewal: nextBillingDate,
      category: 'SaaS Utilities',
      paymentSource: autoCharge ? 'Auto-Charge' : 'Manual Transfer',
      earlyAlerts: true,
      active: true
    };

    if (onCreate) {
      await onCreate(newSub);
    }

    setSubmitting(false);
    setName('');
    setCost('');
    setNextBillingDate(new Date().toISOString().split('T')[0]);
    setAutoCharge(true);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150 select-none">
      <div className="w-full max-w-md bg-zinc-950 border border-white/10 rounded-2xl p-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
        
        <h2 className="text-base font-bold text-white border-b border-white/5 pb-3 mb-6 font-sans">
          Add Subscription Schedule
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs font-sans">
          
          {/* Subscription Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Subscription Name</label>
            <input 
              type="text" 
              required 
              disabled={submitting}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. NETFLIX, AWS, GITHUB" 
              className="w-full bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-white text-xs placeholder:text-slate-700 disabled:opacity-50" 
            />
          </div>

          {/* Monthly Cost */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Monthly Cost (₹)</label>
            <input 
              type="number" 
              step="0.01" 
              required 
              disabled={submitting}
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="0.00" 
              className="w-full bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-white text-xs placeholder:text-slate-700 disabled:opacity-50 font-mono" 
            />
          </div>

          {/* Next Billing Date */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Next Billing Date</label>
            <input 
              type="date" 
              required 
              disabled={submitting}
              value={nextBillingDate}
              onChange={(e) => setNextBillingDate(e.target.value)}
              className="w-full bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-slate-350 text-xs" 
            />
          </div>

          {/* Auto-Charge Toggle */}
          <div className="flex items-center justify-between border border-white/5 rounded-2xl px-4 py-3 mt-1 select-none">
            <div className="flex flex-col">
              <span className="font-bold text-slate-300">Auto-Charge Enabled</span>
              <span className="text-[8px] text-slate-500 uppercase mt-0.5 font-bold">Simulate payment automatically</span>
            </div>
            <button
              type="button"
              onClick={() => setAutoCharge(!autoCharge)}
              className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${autoCharge ? 'bg-indigo-650' : 'bg-white/10'}`}
            >
              <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${autoCharge ? 'translate-x-4' : 'translate-x-0'}`} />
            </button>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6 border-t border-white/5 pt-4">
            <button 
              type="button"
              onClick={onClose}
              disabled={submitting}
              className="px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-405 hover:text-white transition-all text-xs font-semibold cursor-pointer disabled:opacity-50"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={submitting}
              className="px-5 py-2.5 bg-indigo-650 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all text-xs cursor-pointer disabled:bg-indigo-700/50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Initializing...' : 'Add Subscription'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
