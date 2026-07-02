import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function CreateMilestoneModal({ isOpen, onClose, onCreate }) {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [target, setTarget] = useState('');
  const [initialDeposit, setInitialDeposit] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !target) return;

    setSubmitting(true);
    
    const newGoal = {
      title: title.trim(),
      target: parseFloat(target),
      current: parseFloat(initialDeposit) || 0
    };

    if (onCreate) {
      await onCreate(newGoal);
    }

    setSubmitting(false);
    setTitle('');
    setTarget('');
    setInitialDeposit('');
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
          Create Capital Milestone
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs font-sans">
          
          {/* Target Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Target Name</label>
            <input 
              type="text" 
              required 
              disabled={submitting}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Emergency Fund, Tesla Model 3" 
              className="w-full bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-white text-xs placeholder:text-slate-700 disabled:opacity-50" 
            />
          </div>

          {/* Target Amount */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Target Amount (₹)</label>
            <input 
              type="number" 
              required 
              disabled={submitting}
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="0.00" 
              className="w-full bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-white text-xs placeholder:text-slate-700 disabled:opacity-50 font-mono" 
            />
          </div>

          {/* Initial Deposit */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Initial Deposit (₹) (Optional)</label>
            <input 
              type="number" 
              disabled={submitting}
              value={initialDeposit}
              onChange={(e) => setInitialDeposit(e.target.value)}
              placeholder="0.00" 
              className="w-full bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-white text-xs placeholder:text-slate-700 disabled:opacity-50 font-mono" 
            />
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
              className="px-5 py-2.5 bg-emerald-650 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all text-xs cursor-pointer disabled:bg-emerald-700/50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Creating...' : 'Create Milestone'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
