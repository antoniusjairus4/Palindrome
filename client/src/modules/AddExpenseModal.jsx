import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { X, Sparkles, Check, Calendar, Camera, Trash2 } from 'lucide-react';
import useGhostCategorizer from '../hooks/useGhostCategorizer';
import { useUXMode } from '../context/UXModeContext';
import ReceiptScanner from '../components/ReceiptScanner';

export default function AddExpenseModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { workspaceMode } = useUXMode();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('Misc');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [assignedCategory, setAssignedCategory] = useState(null);
  const [offlineMode, setOfflineMode] = useState(false);

  // OCR state variables
  const [ocrLoading, setOcrLoading] = useState(false);
  const [hasReceipt, setHasReceipt] = useState(false);
  const [receiptImage, setReceiptImage] = useState('');
  const [hasImageProof, setHasImageProof] = useState(false);
  const [proofImage, setProofImage] = useState('');
  const [extractedText, setExtractedText] = useState('');


  // Initialize the AI classification WebWorker hook
  const { isReady, isPredicting, downloadProgress, predictedCategory, predict } = useGhostCategorizer();

  const debounceTimerRef = useRef(null);

  const categories = ['Shopping', 'Food', 'Bills', 'Travel', 'Entertainment', 'Salary', 'Income', 'Misc'];

  // Map institutional labels from Xenova model to our dropdown categories
  const mapCategory = (predCat) => {
    switch (predCat) {
      case 'Food & Dining':
        return 'Food';
      case 'Travel & Commute':
        return 'Travel';
      case 'Software Subscriptions':
      case 'Utilities':
        return 'Bills';
      case 'Shopping':
        return 'Shopping';
      case 'Entertainment':
        return 'Entertainment';
      case 'Salary & Income':
        return 'Salary';
      case 'Miscellaneous':
      default:
        return 'Misc';
    }
  };

  // Debounced description inference trigger
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (title.trim().length > 2) {
      debounceTimerRef.current = setTimeout(() => {
        predict(title.trim());
      }, 600);
    }

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [title, predict]);

  // Automatically update input category selector state when inference completes
  useEffect(() => {
    if (predictedCategory) {
      const mapped = mapCategory(predictedCategory);
      setCategory(mapped);
    }
  }, [predictedCategory]);

  const getCategoryStyles = (cat) => {
    switch (cat) {
      case 'Food':
        return 'bg-rose-950/20 border-rose-900/30 text-rose-400';
      case 'Bills':
        return 'bg-indigo-950/20 border-indigo-900/30 text-indigo-400';
      case 'Travel':
        return 'bg-amber-950/20 border-amber-900/30 text-amber-400';
      case 'Shopping':
        return 'bg-purple-950/20 border-purple-900/30 text-purple-400';
      case 'Entertainment':
        return 'bg-pink-950/20 border-pink-900/30 text-pink-400';
      case 'Salary':
      case 'Income':
        return 'bg-emerald-950/20 border-emerald-900/30 text-emerald-400';
      default:
        return 'bg-white/5 border-white/10 text-slate-400';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    setSubmitting(true);
    setAssignedCategory(null);
    setOfflineMode(false);

    const parsedAmount = Math.abs(parseFloat(amount)) * (type === 'expense' ? -1 : 1);

    const newTx = {
      title: title.trim(),
      amount: parsedAmount,
      type,
      category,
      date,
      notes: notes.trim(),
      createdAt: new Date(date).toISOString(),
      hasReceipt,
      receiptImage,
      hasImageProof,
      proofImage,
      extractedText
    };

    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      
      const response = await axios.post('/api/transactions', newTx, config);
      if (response.data && response.data.category) {
        setAssignedCategory(response.data.category);
      } else {
        setAssignedCategory(category);
      }
    } catch (error) {
      console.warn('[Palindrome Sandbox] Server offline. Saving transaction locally.', error.message);
      setOfflineMode(true);
      
      const cached = localStorage.getItem('__palindrome_transactions') || localStorage.getItem('__curie_transactions');
      let currentList = [];
      if (cached) {
        try {
          currentList = JSON.parse(cached);
        } catch (e) {
          currentList = [];
        }
      }
      
      const simulatedTx = {
        _id: `tx_${Date.now()}`,
        ...newTx,
      };
      
      const updatedList = [simulatedTx, ...currentList];
      localStorage.setItem('__palindrome_transactions', JSON.stringify(updatedList));
      setAssignedCategory(category);
    } finally {
      setSubmitting(false);

      // Keep success reveal screen visible for 1.5 seconds, then reset and close
      setTimeout(() => {
        setTitle('');
        setAmount('');
        setType('expense');
        setCategory('Misc');
        setDate(new Date().toISOString().split('T')[0]);
        setNotes('');
        setHasReceipt(false);
        setReceiptImage('');
        setHasImageProof(false);
        setProofImage('');
        setExtractedText('');
        setAssignedCategory(null);
        setOfflineMode(false);
        onClose();
      }, 1500);
    }
  };

  const canClose = !submitting && !assignedCategory;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150 select-none">
      <div className="w-full max-w-md bg-zinc-950 border border-white/10 rounded-2xl p-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        {canClose && (
          <button 
            onClick={onClose} 
            className="absolute top-5 right-5 text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        
        {assignedCategory ? (
          /* Post-Submit Success Screen */
          <div className="flex flex-col items-center text-center py-6 animate-in fade-in zoom-in-95 duration-200 font-sans">
            <div className="w-12 h-12 rounded-full bg-emerald-950/20 border border-emerald-900/30 flex items-center justify-center text-emerald-400 mb-4 shadow-sm animate-in scale-in duration-300">
              <Check className="w-5 h-5 stroke-[2.5]" />
            </div>
            
            <h3 className="text-sm font-bold text-white tracking-wide uppercase mb-1">
              Transaction Logged
            </h3>
            {offlineMode ? (
              <div className="text-[9px] bg-amber-500/10 border border-amber-500/30 text-amber-500 font-semibold px-2 py-0.5 rounded-full mb-5 tracking-wider uppercase animate-pulse">
                Saved Offline (Sandbox Mode)
              </div>
            ) : (
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-5">
                Ledger record created successfully
              </p>
            )}
 
            <div className={`flex flex-col items-center gap-1.5 px-6 py-3.5 border rounded-xl w-full max-w-xs shadow-sm ${getCategoryStyles(assignedCategory)}`}>
              <span className="text-[9px] font-sans font-bold uppercase tracking-[0.15em] opacity-80 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                Category
              </span>
              <span className="text-base font-extrabold tracking-wide uppercase">
                {assignedCategory}
              </span>
            </div>
          </div>
        ) : (
          /* Form Entry Screen */
          <>
            {/* Header */}
            <h2 className="text-base font-bold text-white border-b border-white/5 pb-3 mb-6 font-sans">
              Log Transaction
            </h2>
 
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs font-sans">
              
              {/* Receipt / Screenshot Attachment Scanner Area */}
              {!hasImageProof ? (
                <div className="mb-2">
                  <ReceiptScanner
                    onScanComplete={(scanned) => {
                      setTitle(scanned.title);
                      setAmount(scanned.amount);
                      setDate(scanned.date);
                      setCategory(scanned.category);
                      setReceiptImage(scanned.receiptImage);
                      setProofImage(scanned.proofImage);
                      setHasReceipt(scanned.hasReceipt);
                      setHasImageProof(scanned.hasImageProof);
                      setExtractedText(scanned.extractedText);
                    }}
                    onDiscard={() => {
                      setHasReceipt(false);
                      setReceiptImage('');
                      setHasImageProof(false);
                      setProofImage('');
                      setExtractedText('');
                    }}
                  />
                </div>
              ) : (
                /* Glassmorphic Attached File Widget */
                <div className="mb-2 p-3 bg-indigo-950/20 border border-indigo-500/30 text-indigo-300 rounded-xl flex items-center justify-between gap-3 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 bg-zinc-900 flex-shrink-0">
                      <img src={proofImage} alt="Receipt Attachment" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[10px] text-white uppercase tracking-wider">Receipt Attached</span>
                      <span className="text-[8px] text-indigo-400 font-mono tracking-wide">OCR details successfully imported</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setHasReceipt(false);
                      setReceiptImage('');
                      setHasImageProof(false);
                      setProofImage('');
                      setExtractedText('');
                    }}
                    className="p-1.5 hover:bg-rose-950/40 border border-transparent hover:border-rose-500/30 text-slate-550 hover:text-rose-450 rounded-lg transition-all cursor-pointer"
                    title="Remove Attachment"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Large Typography Numeric Input for Amount */}
              <div className="flex flex-col items-center mb-2">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-1.5 justify-center">
                  Amount
                </label>
                <div className="flex items-center gap-3 w-full max-w-[280px]">
                  <div className="relative flex-1 flex items-center justify-center">
                    <span className="absolute left-2 text-2xl font-bold text-slate-500">₹</span>
                    <input 
                      type="number" 
                      step="0.01" 
                      required 
                      disabled={submitting}
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00" 
                      className="w-full bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-1 pl-7 text-center text-3xl font-bold text-white font-mono placeholder:text-slate-800 disabled:opacity-50" 
                    />
                  </div>
                </div>
              </div>

 
              {/* Transaction Type Selector */}
              <div className="flex justify-center gap-6 mb-2">
                <label className="flex items-center gap-2 font-sans font-semibold text-slate-350 cursor-pointer select-none">
                  <input 
                    type="radio" 
                    name="type" 
                    value="expense" 
                    disabled={submitting}
                    checked={type === 'expense'} 
                    onChange={() => setType('expense')}
                    className="accent-indigo-500 cursor-pointer"
                  />
                  Expense
                </label>
                <label className="flex items-center gap-2 font-sans font-semibold text-slate-350 cursor-pointer select-none">
                  <input 
                    type="radio" 
                    name="type" 
                    value="income" 
                    disabled={submitting}
                    checked={type === 'income'} 
                    onChange={() => setType('income')}
                    className="accent-indigo-500 cursor-pointer"
                  />
                  Income
                </label>
              </div>
 
              {/* Description Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Description</label>
                <input 
                  type="text" 
                  required 
                  disabled={submitting}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. AWS Cloud Hosting" 
                  className="w-full bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-white text-xs placeholder:text-slate-700 disabled:opacity-50" 
                />
              </div>
 
              {/* Category Dropdown */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Category</label>
                  {workspaceMode === 'Business' && !isReady && (
                    <span className="text-zinc-500 font-mono text-xs">
                      [ Downloading Neural Weights: {downloadProgress}% ]
                    </span>
                  )}
                  {workspaceMode === 'Business' && isReady && isPredicting && (
                    <span className="text-indigo-400 animate-pulse font-mono text-xs">
                      [ Ghost AI Routing... ]
                    </span>
                  )}
                </div>
                <select
                  value={category}
                  disabled={submitting}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-slate-300 text-xs"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-zinc-950 text-white">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
 
              {/* Date Input */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Date</label>
                <div className="relative">
                  <input 
                    type="date" 
                    required 
                    disabled={submitting}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-slate-300 text-xs" 
                  />
                </div>
              </div>
 
              {/* Notes (Optional) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Notes (Optional)</label>
                <input 
                  type="text" 
                  disabled={submitting}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add optional notes..." 
                  className="w-full bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-white text-xs placeholder:text-slate-700 disabled:opacity-50" 
                />
              </div>
 
              {/* Action Buttons Row */}
              <div className="flex justify-end gap-3 mt-6 border-t border-white/5 pt-4">
                <button 
                  type="button"
                  onClick={onClose}
                  disabled={submitting}
                  className="px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white transition-all text-xs font-semibold cursor-pointer disabled:opacity-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="px-5 py-2.5 bg-indigo-650 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all text-xs cursor-pointer disabled:bg-indigo-700/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Logging...' : 'Log Transaction'}
                </button>
              </div>
 
            </form>
          </>
        )}
      </div>
    </div>
  );
}