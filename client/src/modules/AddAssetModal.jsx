import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { X, Check, AlertCircle, Sparkles } from 'lucide-react';

export default function AddAssetModal({ isOpen, onClose, onAssetAdded }) {
  if (!isOpen) return null;

  const [valuationMode, setValuationMode] = useState('Live');
  const [ticker, setTicker] = useState('');
  const [name, setName] = useState('');
  const [manualValue, setManualValue] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [assetClass, setAssetClass] = useState('Equity');
  const [submitting, setSubmitting] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null); // { valid: boolean, name: string, price: number, message?: string }
  const [verificationError, setVerificationError] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  // Clear verification results on ticker, class or mode change
  useEffect(() => {
    setVerificationResult(null);
    setVerificationError(null);
    setSubmitError(null);
  }, [ticker, assetClass, valuationMode]);

  // Adjust default assetClass when switching valuation modes
  useEffect(() => {
    if (valuationMode === 'Manual') {
      setAssetClass('Real Estate');
    } else {
      setAssetClass('Equity');
    }
  }, [valuationMode]);

  const handleVerify = async () => {
    if (!ticker) return;

    setVerifying(true);
    setVerificationResult(null);
    setVerificationError(null);
    setSubmitError(null);

    const payload = { ticker: ticker.trim().toUpperCase(), assetClass };
    console.log("[DEBUG] Verifying Ticker Payload:", payload);

    try {
      const token = localStorage.getItem('token');
      const config = { 
        headers: { Authorization: `Bearer ${token}` },
        params: payload
      };

      const response = await axios.get('/api/portfolio/verify', config);
      if (response.data && response.data.valid) {
        setVerificationResult({
          valid: true,
          name: response.data.name,
          price: response.data.price
        });
        setVerificationError(null);
      }
    } catch (error) {
      console.error("[DEBUG] Verification API Error:", error.response?.data || error.message);
      const errMsg = error.response?.data?.message || 'Ticker verification failed. Please check the symbol and ensure the correct Asset Class is selected.';
      setVerificationError(errMsg);
      setVerificationResult({
        valid: false,
        message: errMsg
      });
    } finally {
      setVerifying(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isManual = valuationMode === 'Manual';
    if (!isManual && (!ticker || !quantity)) return;
    if (isManual && (!name || !quantity || !manualValue)) return;

    setSubmitting(true);
    setSubmitError(null);

    const assetData = {
      assetTicker: isManual ? undefined : ticker.trim().toUpperCase(),
      assetName: isManual ? name.trim() : (verificationResult?.name || name.trim() || ticker.trim().toUpperCase()),
      quantity: parseFloat(quantity),
      assetClass,
      valuationMode,
      manualValue: isManual ? parseFloat(manualValue) : undefined
    };

    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.post('/api/portfolio/assets', assetData, config);
      
      if (onAssetAdded) {
        onAssetAdded();
      }
      
      // Reset & Close
      setTicker('');
      setName('');
      setManualValue('');
      setQuantity('1');
      setAssetClass('Equity');
      setValuationMode('Live');
      setVerificationResult(null);
      setSubmitError(null);
      onClose();
    } catch (error) {
      setSubmitError(error.response?.data?.message || 'Failed to save asset');
    } finally {
      setSubmitting(false);
    }
  };

  const isManual = valuationMode === 'Manual';

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
        
        <h2 className="text-base font-bold text-white border-b border-white/5 pb-3 mb-4 font-sans">
          Log Asset Holding
        </h2>

        {submitError && (
          <div className="mb-4 p-2.5 rounded-lg border bg-rose-950/20 border-rose-900/30 text-rose-400 flex items-center gap-2">
            <AlertCircle className="w-3.5 h-3.5 shrink-0 animate-pulse" />
            <span className="font-medium text-xs">{submitError}</span>
          </div>
        )}

        {/* Valuation Mode Selector */}
        <div className="flex bg-white/5 border border-white/10 p-0.5 rounded-xl text-xs font-semibold select-none mb-4">
          <button
            type="button"
            onClick={() => setValuationMode('Live')}
            className={`flex-1 py-1.5 text-center rounded-lg transition-all cursor-pointer ${
              valuationMode === 'Live'
                ? 'bg-white/10 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-350'
            }`}
          >
            Live Market Asset
          </button>
          <button
            type="button"
            onClick={() => setValuationMode('Manual')}
            className={`flex-1 py-1.5 text-center rounded-lg transition-all cursor-pointer ${
              valuationMode === 'Manual'
                ? 'bg-white/10 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-350'
            }`}
          >
            Manual Valuation
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs font-sans">
          
          {/* Asset Class Dropdown */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Asset Class</label>
            <select
              value={assetClass}
              disabled={submitting}
              onChange={(e) => setAssetClass(e.target.value)}
              className="w-full bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-slate-300 text-xs"
            >
              {valuationMode === 'Live' ? (
                <>
                  <option value="Equity" className="bg-zinc-950 text-white">Equity (Stocks/ETFs)</option>
                  <option value="Crypto" className="bg-zinc-950 text-white">Crypto (Coins/Tokens)</option>
                  <option value="Commodity" className="bg-zinc-950 text-white">Commodity (Metals/Energy)</option>
                </>
              ) : (
                <>
                  <option value="Real Estate" className="bg-zinc-950 text-white">Real Estate (Property/Land)</option>
                  <option value="Precious Metals" className="bg-zinc-950 text-white">Precious Metals (Gold/Jewelry)</option>
                  <option value="Vehicle" className="bg-zinc-950 text-white">Vehicle (Cars/Bikes)</option>
                  <option value="Custom" className="bg-zinc-950 text-white">Custom / Private Asset</option>
                  <option value="Equity" className="bg-zinc-950 text-white">Private Equity / Business</option>
                </>
              )}
            </select>
          </div>

          {/* Ticker Input & Verify Button (Live Mode only) */}
          {!isManual && (
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Asset Ticker / Symbol</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  required={!isManual} 
                  disabled={submitting}
                  value={ticker}
                  onChange={(e) => setTicker(e.target.value)}
                  placeholder={assetClass === 'Crypto' ? 'e.g. BTC, ETH' : assetClass === 'Commodity' ? 'e.g. GOLD, XAU' : 'e.g. AAPL, TSLA'} 
                  className="flex-1 bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-white text-xs placeholder:text-slate-700 disabled:opacity-50 uppercase" 
                />
                <button
                  type="button"
                  onClick={handleVerify}
                  disabled={verifying || !ticker || submitting}
                  className="px-3.5 py-1.5 border border-white/10 rounded-xl hover:bg-white/5 text-slate-350 hover:text-white transition-all text-xs font-semibold cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {verifying ? 'Verifying...' : 'Verify Ticker'}
                </button>
              </div>
              {verificationError && (
                <p className="text-red-500 text-xs mt-1 font-medium">
                  {verificationError}
                </p>
              )}
              
              {/* Verification Response Display */}
              {verificationResult && (
                <div className={`mt-2 p-2.5 rounded-lg border flex items-center gap-2 ${
                  verificationResult.valid 
                    ? 'bg-emerald-950/20 border-emerald-900/30 text-emerald-400' 
                    : 'bg-rose-950/20 border-rose-900/30 text-rose-455'
                }`}>
                  {verificationResult.valid ? (
                    <>
                      <Check className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">
                        <strong>{verificationResult.name}</strong> verified: ~${Number(verificationResult.price).toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{verificationResult.message}</span>
                    </>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Name Input (Required for Manual, Optional for Live) */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
              {isManual ? 'Asset Name / Description' : 'Custom Display Name (Optional)'}
            </label>
            <input 
              type="text" 
              required={isManual}
              disabled={submitting}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={isManual ? 'e.g. Downtown Apartment, Gold Bars' : 'e.g. My Long-term AAPL'} 
              className="w-full bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-white text-xs placeholder:text-slate-700 disabled:opacity-50" 
            />
          </div>

          {/* Manual Value (Manual Mode only) */}
          {isManual && (
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Current Estimated Value (Per Unit)</label>
              <input 
                type="number" 
                step="any"
                required={isManual} 
                disabled={submitting}
                value={manualValue}
                onChange={(e) => setManualValue(e.target.value)}
                placeholder="0.00" 
                className="w-full bg-transparent border-b border-white/10 focus:border-indigo-500 focus:outline-none transition-all py-2 text-white text-xs placeholder:text-slate-700 disabled:opacity-50 font-mono" 
              />
            </div>
          )}

          {/* Quantity owned */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Quantity Owned</label>
            <input 
              type="number" 
              step="any"
              required 
              disabled={submitting}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="1.00" 
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
              disabled={submitting || (!isManual && (!verificationResult?.valid || !ticker))}
              className="px-5 py-2.5 bg-indigo-650 hover:bg-indigo-600 text-white font-semibold rounded-xl transition-all text-xs cursor-pointer disabled:bg-indigo-700/50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Saving...' : 'Add Asset'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
