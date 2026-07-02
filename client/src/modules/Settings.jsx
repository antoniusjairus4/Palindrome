import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCurrency } from '../context/CurrencyContext';
import { useUXMode } from '../context/UXModeContext';
import { Globe, Shield, Eye, Database, ToggleLeft, ToggleRight, Sliders, Trash2, Download } from 'lucide-react';

export default function Settings() {
  const { currency, setCurrency } = useCurrency();
  const { workspaceMode, setWorkspaceMode } = useUXMode();
  const [loading, setLoading] = useState(false);
  const [savingField, setSavingField] = useState(null);
  const [statusMsg, setStatusMsg] = useState(null);
  const [statusType, setStatusType] = useState('success');

  const triggerStatus = (msg, type = 'success') => {
    setStatusMsg(msg);
    setStatusType(type);
    const timer = setTimeout(() => {
      setStatusMsg(null);
    }, 4000);
    return () => clearTimeout(timer);
  };

  const [settings, setSettings] = useState({
    baseCurrency: 'INR',
    biometricProtection: false,
    neonGlow: false,
    glassmorphicIntensity: 'Classic Matte',
    defaultTaxJurisdiction: 'None',
    liquidityThreshold: 40,
    defaultAnalyticsWindow: 'ALL',
    workspaceMode: 'Normal'
  });

  useEffect(() => {
    fetchUserSettings();
  }, []);

  const fetchUserSettings = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.get('/api/user/profile', config);
      if (response.data && response.data.settings) {
        const userSettings = {
          baseCurrency: response.data.settings.baseCurrency || 'INR',
          biometricProtection: !!response.data.settings.biometricProtection,
          neonGlow: !!response.data.settings.neonGlow,
          glassmorphicIntensity: response.data.settings.glassmorphicIntensity || 'Classic Matte',
          defaultTaxJurisdiction: response.data.settings.defaultTaxJurisdiction || 'None',
          liquidityThreshold: response.data.settings.liquidityThreshold !== undefined ? response.data.settings.liquidityThreshold : 40,
          defaultAnalyticsWindow: response.data.settings.defaultAnalyticsWindow || 'ALL',
          workspaceMode: response.data.settings.workspaceMode || 'Normal'
        };
        setSettings(userSettings);
        setCurrency(userSettings.baseCurrency);
        setWorkspaceMode(userSettings.workspaceMode);
        localStorage.setItem('__palindrome_settings', JSON.stringify(userSettings));
      }
    } catch (error) {
      console.error('Failed to load user settings:', error.message);
      const stored = localStorage.getItem('__palindrome_settings');
      if (stored) {
        const parsed = JSON.parse(stored);
        setSettings(parsed);
        if (parsed.workspaceMode) {
          setWorkspaceMode(parsed.workspaceMode);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const updateSetting = async (key, value) => {
    const updated = { ...settings, [key]: value };
    setSettings(updated);
    setSavingField(key);
    
    // Write locally immediately for instant UX feedback
    localStorage.setItem('__palindrome_settings', JSON.stringify(updated));
    if (key === 'baseCurrency') {
      setCurrency(value);
    }
    if (key === 'workspaceMode') {
      setWorkspaceMode(value);
    }

    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.put('/api/user/settings', { [key]: value }, config);
    } catch (error) {
      console.error('Failed to sync setting to backend:', error.message);
    } finally {
      setSavingField(null);
    }
  };

  const handlePurgeNeuralCache = async () => {
    try {
      const keys = await window.caches.keys();
      let deletedCount = 0;
      for (const key of keys) {
        if (key.includes('onnx') || key.includes('xenova') || key.includes('transformers')) {
          await window.caches.delete(key);
          deletedCount++;
        }
      }
      triggerStatus(`Successfully purged neural cache! Cleared ${deletedCount} cache storage entries.`);
    } catch (error) {
      console.error('Failed to purge neural cache:', error);
      triggerStatus('Failed to purge neural cache. Please check browser permissions.', 'error');
    }
  };

  const handleExportDataVault = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      
      const [profileRes, transactionsRes, valuationRes] = await Promise.all([
        axios.get('/api/user/profile', config),
        axios.get('/api/transactions', config),
        axios.get('/api/portfolio/valuation', config)
      ]);
      
      const backupData = {
        exportedAt: new Date().toISOString(),
        version: "1.0.0",
        profile: profileRes.data,
        transactions: transactionsRes.data,
        assets: valuationRes.data?.assets || valuationRes.data || []
      };
      
      const jsonStr = JSON.stringify(backupData, null, 2);
      const blob = new Blob([jsonStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `palindrome_data_vault_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      triggerStatus('Data vault backup exported and downloaded successfully.');
    } catch (error) {
      console.error('Data vault export failed:', error);
      triggerStatus('Failed to export data vault. Please try again.', 'error');
    }
  };

  return (
    <div className="max-w-3xl flex flex-col gap-6 animate-in fade-in duration-200 font-sans pb-12">
      {statusMsg && (
        <div className={`p-3 rounded-xl border text-xs font-semibold animate-in fade-in slide-in-from-top-2 duration-200 ${
          statusType === 'success' 
            ? 'bg-emerald-950/20 border-emerald-900/30 text-emerald-400' 
            : 'bg-rose-950/20 border-rose-900/30 text-rose-455'
        }`}>
          {statusMsg}
        </div>
      )}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-slate-900 dark:text-white">Settings</h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Configure currency defaults, visual interface, and security settings.
          </p>
        </div>
        {savingField && (
          <span className="text-[10px] bg-indigo-50 dark:bg-indigo-950/40 text-indigo-650 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30 px-2 py-0.5 rounded-full font-semibold animate-pulse">
            Saving {savingField}...
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* SECTION A: CORE LOCALIZATION & SECURITY */}
        <div className="bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-5 text-xs shadow-sm">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-white/5 pb-3">
            <Globe className="w-4 h-4 text-indigo-500" />
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-[10px]">Localization & Security</h3>
          </div>
          
          <div className="flex flex-col gap-4">
            {/* Valuation Currency */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Default Currency</h4>
                <p className="text-[10px] text-slate-450 dark:text-slate-500 mt-0.5">Configure the default currency symbol across your accounts and reports.</p>
              </div>
              <select 
                value={settings.baseCurrency} 
                onChange={(e) => updateSetting('baseCurrency', e.target.value)}
                className="bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs rounded-xl px-3 py-1.5 outline-none cursor-pointer focus:border-indigo-500 transition-all"
              >
                {['USD','INR','EUR','GBP','JPY','CNY','AUD','CAD','SGD','AED','CHF'].map(c => (
                  <option key={c} value={c} className="bg-white dark:bg-zinc-950 text-slate-800 dark:text-slate-200">{c}</option>
                ))}
              </select>
            </div>

            {/* Biometric toggle */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Passcode & Face Unlock</h4>
                <p className="text-[10px] text-slate-450 dark:text-slate-500 mt-0.5">Prompt for fingerprint or passcode check when opening the app.</p>
              </div>
              <button 
                onClick={() => updateSetting('biometricProtection', !settings.biometricProtection)} 
                className="text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer bg-transparent border-none outline-none"
              >
                {settings.biometricProtection ? <ToggleRight className="w-8 h-8 text-indigo-650 dark:text-indigo-400" /> : <ToggleLeft className="w-8 h-8 opacity-40" />}
              </button>
            </div>

            {/* Workspace Experience Mode */}
            <div className="flex flex-col gap-2 pt-3 border-t border-slate-100 dark:border-white/5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">App Mode</h4>
                  <p className="text-[10px] text-slate-450 dark:text-slate-500 mt-0.5">Choose between standard everyday view or advanced business analytics.</p>
                </div>
              </div>
              <div className="flex bg-slate-100 dark:bg-zinc-950 border border-slate-200 dark:border-white/10 p-0.5 rounded-xl text-[10px] select-none mt-1.5 w-full">
                <button
                  type="button"
                  onClick={() => updateSetting('workspaceMode', 'Normal')}
                  className={`flex-1 py-2 rounded-lg transition-all cursor-pointer text-center ${
                    settings.workspaceMode === 'Normal' ? 'bg-indigo-600 text-white shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  Normal (Simplified daily tracking)
                </button>
                <button
                  type="button"
                  onClick={() => updateSetting('workspaceMode', 'Business')}
                  className={`flex-1 py-2 rounded-lg transition-all cursor-pointer text-center ${
                    settings.workspaceMode === 'Business' ? 'bg-indigo-600 text-white shadow-sm font-semibold' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  Business (Advanced wealth analytics)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION B: INTERFACE VISUAL CUSTOMIZATIONS */}
        <div className="bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-5 text-xs shadow-sm">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-white/5 pb-3">
            <Eye className="w-4 h-4 text-pink-500" />
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-[10px]">Interface Customization</h3>
          </div>
          
          <div className="flex flex-col gap-4">
            {/* Neon Glow Accents */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Dashboard Accents</h4>
                <p className="text-[10px] text-slate-450 dark:text-slate-500 mt-0.5">Add subtle glowing effects to the main balances and metrics.</p>
              </div>
              <button 
                onClick={() => updateSetting('neonGlow', !settings.neonGlow)} 
                className="text-slate-400 dark:text-slate-500 hover:text-pink-600 dark:hover:text-pink-400 transition-colors cursor-pointer bg-transparent border-none outline-none"
              >
                {settings.neonGlow ? <ToggleRight className="w-8 h-8 text-pink-600 dark:text-pink-400" /> : <ToggleLeft className="w-8 h-8 opacity-40" />}
              </button>
            </div>

            {/* Glassmorphic Container Intensity */}
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Background Style</h4>
                <p className="text-[10px] text-slate-450 dark:text-slate-500 mt-0.5">Adjust the blur transparency effect of cards and panels.</p>
              </div>
              <select 
                value={settings.glassmorphicIntensity} 
                onChange={(e) => updateSetting('glassmorphicIntensity', e.target.value)}
                className="bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs rounded-xl px-3 py-1.5 outline-none cursor-pointer focus:border-indigo-500 transition-all"
              >
                {['Classic Matte', 'Medium Frosted Glass', 'Ultra High Translucency'].map(intensity => (
                  <option key={intensity} value={intensity} className="bg-white dark:bg-zinc-950 text-slate-800 dark:text-slate-200">{intensity}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* SECTION C: CALCULATIONS & DEFAULTS */}
        <div className="bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-5 text-xs shadow-sm md:col-span-2">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-white/5 pb-3">
            <Sliders className="w-4 h-4 text-emerald-500" />
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-[10px]">Calculations & Defaults</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              {/* Default Tax Jurisdiction */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Default Tax Country</h4>
                  <p className="text-[10px] text-slate-450 dark:text-slate-500 mt-0.5">Choose your country to pre-fill tax estimations.</p>
                </div>
                <select 
                  value={settings.defaultTaxJurisdiction} 
                  onChange={(e) => updateSetting('defaultTaxJurisdiction', e.target.value)}
                  className="bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs rounded-xl px-3 py-1.5 outline-none cursor-pointer focus:border-indigo-500 transition-all"
                >
                  {['None', 'USA', 'United Kingdom', 'India'].map(j => (
                    <option key={j} value={j} className="bg-white dark:bg-zinc-950 text-slate-800 dark:text-slate-200">{j}</option>
                  ))}
                </select>
              </div>

              {/* Default Analytics Window */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Default Timeline</h4>
                  <p className="text-[10px] text-slate-450 dark:text-slate-500 mt-0.5">Pre-set the timeline filters for transaction reports.</p>
                </div>
                <select 
                  value={settings.defaultAnalyticsWindow} 
                  onChange={(e) => updateSetting('defaultAnalyticsWindow', e.target.value)}
                  className="bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 text-xs rounded-xl px-3 py-1.5 outline-none cursor-pointer focus:border-indigo-500 transition-all"
                >
                  {['30D', '90D', 'YTD', 'ALL'].map(w => (
                    <option key={w} value={w} className="bg-white dark:bg-zinc-950 text-slate-800 dark:text-slate-200">{w}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3 justify-center">
              {/* Liquidity Threshold Warning */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Low Balance Alert Threshold</h4>
                  <span className="font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2 py-0.5 rounded-md font-semibold">{settings.liquidityThreshold}%</span>
                </div>
                <p className="text-[10px] text-slate-450 dark:text-slate-500 mb-2">Warns you when your cash drops below this percentage of total net worth.</p>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-slate-400">0%</span>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    step="5"
                    value={settings.liquidityThreshold} 
                    onChange={(e) => updateSetting('liquidityThreshold', Number(e.target.value))}
                    className="flex-1 accent-indigo-600 dark:accent-indigo-400 h-1 bg-slate-100 dark:bg-zinc-900 rounded-lg appearance-none cursor-pointer" 
                  />
                  <span className="text-[10px] text-slate-400">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION D: LOCAL DATA ENGINE MANAGEMENT */}
        <div className="bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-5 text-xs shadow-sm md:col-span-2">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-white/5 pb-3">
            <Database className="w-4 h-4 text-amber-500" />
            <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-[10px]">Data Management</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200">Clear Saved AI Models</h4>
              <p className="text-[10px] text-slate-450 dark:text-slate-500 mt-0.5">Delete local AI model cache files to free up disk space.</p>
              <button 
                onClick={handlePurgeNeuralCache}
                className="mt-3 flex items-center gap-1.5 px-4 py-2 bg-rose-600/10 hover:bg-rose-600 border border-rose-500/30 text-rose-500 hover:text-white font-semibold rounded-xl text-xs transition-all cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear AI Cache
              </button>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 dark:text-slate-200">Export Backup Data</h4>
              <p className="text-[10px] text-slate-450 dark:text-slate-500 mt-0.5">Download all your transactions, asset lists, and settings as a JSON backup.</p>
              <button 
                onClick={handleExportDataVault}
                className="mt-3 flex items-center gap-1.5 px-4 py-2 bg-indigo-600/10 hover:bg-indigo-650 border border-indigo-500/30 text-indigo-400 hover:text-white font-semibold rounded-xl text-xs transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                Export Backup JSON
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}