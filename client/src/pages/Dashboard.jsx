import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logoDark from '../assets/logo_dark.png';

const Dashboard = () => {
  // Telemetry & Data States
  const [loading, setLoading] = useState(true);
  const [latency, setLatency] = useState('14ms');
  const [netWorth, setNetWorth] = useState(1245780.00);
  const [rollingChange, setRollingChange] = useState(3450.00);
  const [transactions, setTransactions] = useState([]);
  const [recurringFees, setRecurringFees] = useState([]);
  const [taxData, setTaxData] = useState({ estLiability: 145000.00, progress: 68 });
  
  // Categorical Expenses Hard Allocation Datasets
  const categories = [
    { name: 'Fuel', amount: 8750.00, value: 2499.00, color: 'bg-[#00f2fe]', height: 'h-32' },
    { name: 'Food', amount: 6200.00, value: 875.00, color: 'bg-[#f43f5e]', height: 'h-24' },
    { name: 'Travel', amount: 4100.00, value: 95000.00, color: 'bg-[#eab308]', height: 'h-16' },
    { name: 'Shopping', amount: 3200.00, value: 4120.00, color: 'bg-[#a855f7]', height: 'h-12' },
    { name: 'Misc', amount: 1200.00, value: 350.00, color: 'bg-[#10b981]', height: 'h-8' },
    { name: 'Other', amount: 950.00, value: 120.00, color: 'bg-[#64748b]', height: 'h-6' },
  ];

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Intercept real-time metrics over your production network lanes
        const token = localStorage.getItem('token');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        
        const res = await axios.get('/api/transactions', config);
        
        // Populate and isolate the top 4 day/month transitions
        setTransactions(res.data.slice(0, 4));
        
        // Filter out active automated recurring subscription flags
        const mockRecurring = [
          { name: 'AWS CLOUD INFRA', amount: 8750.00, date: 'AUG 15', daysLeft: 3 },
          { name: 'NETFLIX PREMIUM', amount: 649.00, date: 'SEP 01', daysLeft: 19 }
        ];
        setRecurringFees(mockRecurring);
        setLoading(false);
      } catch (error) {
        console.error('Telemetry ingestion failed:', error.message);
        // Standard high-fidelity developmental fallback arrays if API is initializing
        setTransactions([
          { _id: 'tx_1', title: 'AMAZON INDIA', amount: -2499.00, date: 'AUG 12', category: 'Shopping' },
          { _id: 'tx_2', title: 'ZOMATO', amount: -875.00, date: 'AUG 11', category: 'Food' },
          { _id: 'tx_3', title: 'SALARY (IT INFRA)', amount: 95000.00, date: 'AUG 10', category: 'Inflow' },
          { _id: 'tx_4', title: 'UTILITY BILL', amount: -4120.00, date: 'AUG 14', category: 'Bills' },
        ]);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Handler to safely guide user directly to specific backend endpoint routing definitions
  const handleInspectRoute = (targetFile) => {
    alert(`[SYSTEM_TELEMETRY] Hot-linking direct path to code repository asset location:\nserver/routes/${targetFile}`);
  };

  return (
    <div className="min-h-screen bg-[#0d0e12] text-[#e2e8f0] font-mono p-6 selection:bg-[#00f2fe]/30 selection:text-white">
      
      {/* ── METRIC TOP HEADER BAR ── */}
      <header className="flex justify-between items-center border-b border-[#1e2230] pb-4 mb-6">
        <div className="flex items-center gap-2">
          <img src={logoDark} alt="Palindrome Logo" className="h-6 w-auto object-contain" />
          <h1 className="text-sm font-bold tracking-widest text-white uppercase">Palindrome</h1>
        </div>

      </header>

      {/* ── TELEMETRY WORKSPACE LAYOUT GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* === FEATURE 1: REAL-TIME NET WORTH ROW (COLUMN SPAN: 7) === */}
        <section className="lg:col-span-7 bg-[#14161f] border border-[#1e2230] rounded-xl p-5 relative overflow-hidden group">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] tracking-widest text-[#64748b] uppercase font-bold">Real-Time Net Worth</span>
              <h2 className="text-4xl font-bold tracking-tight text-[#00f2fe] mt-1 transition-all duration-300 group-hover:scale-[1.01]">
                ₹{netWorth.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </h2>
              <span className="text-[11px] text-[#00e676] font-bold block mt-1">
                + ₹{rollingChange.toLocaleString('en-IN')} (ROLLING ASSETS)
              </span>
            </div>
            <span className="text-[9px] bg-[#1e2230] text-[#64748b] border border-[#2d3247] px-2 py-0.5 rounded uppercase font-bold">Real Time Value</span>
          </div>

          {/* Sparkline Canvas Vector Trace Simulation */}
          <div className="h-28 mt-6 relative w-full">
            <svg viewBox="0 0 500 100" className="w-full h-full stroke-[#00f2fe] stroke-2 fill-none drop-shadow-[0_0_8px_rgba(0,242,254,0.2)]">
              <path d="M0,70 L40,65 L80,78 L120,55 L160,68 L200,45 L240,50 L280,32 L320,60 L360,40 L400,25 L440,38 L480,15 L500,20" />
            </svg>
            <div className="flex justify-between text-[9px] text-[#474f6b] uppercase mt-2 border-t border-[#1e2230] pt-1">
              <span>Performance Graph</span>
              <span>24 Hours</span>
            </div>
          </div>
        </section>

        {/* === FEATURE 2: TARGETED DAY/MONTH HOT-LINKS (COLUMN SPAN: 5) === */}
        <section className="lg:col-span-5 bg-[#14161f] border border-[#1e2230] rounded-xl p-5 flex flex-col justify-between">
          <span className="text-[10px] tracking-widest text-[#64748b] uppercase font-bold mb-3 block">Day/Month Transactions</span>
          
          <div className="flex flex-col gap-2">
            {transactions.map((tx, idx) => (
              <div 
                key={tx._id || idx}
                onClick={() => handleInspectRoute('transactionRoutes.js')}
                className="flex justify-between items-center bg-[#1a1d29] hover:bg-[#222636] border border-[#222636] hover:border-[#00f2fe]/40 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200 group relative"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-[#4facfe]">{idx + 1}) {tx.date}</span>
                  <div className="h-3 w-[1px] bg-[#2d3247]"></div>
                  <span className="text-xs font-bold text-white tracking-wide">{tx.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold ${tx.amount < 0 ? 'text-[#f43f5e]' : 'text-[#00e676]'}`}>
                    {tx.amount < 0 ? '-' : '+'}₹{Math.abs(tx.amount).toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Cyber Tooltip Simulation */}
                <div className="absolute right-4 bottom-full mb-1 opacity-0 group-hover:opacity-100 pointer-events-none bg-black/90 text-[9px] text-[#00f2fe] border border-[#00f2fe]/30 px-2 py-1 rounded shadow-xl transition-opacity duration-200 z-10">
                  TOUCH TO INTERCEPT: server/routes/transactionRoutes.js
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === FEATURE 3: PRIORITIZED RECURRING FEES (COLUMN SPAN: 6) === */}
        <section className="lg:col-span-6 bg-[#14161f] border border-[#1e2230] rounded-xl p-5">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] tracking-widest text-[#64748b] uppercase font-bold">Recurring Fee Tracker</span>
            <span className="text-[14px] text-[#474f6b] cursor-pointer hover:text-white">•••</span>
          </div>
          
          <div className="bg-[#1a1d29] border border-[#222636] rounded-xl p-4">
            <div className="flex justify-between text-[9px] text-[#00f2fe] uppercase font-bold tracking-wider mb-2.5 border-b border-[#2d3247] pb-1.5">
              <span>Upcoming Detection</span>
              <span>Prioritized By Proximity</span>
            </div>
            <div className="flex flex-col gap-3">
              {recurringFees.map((fee, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-[#64748b]">{idx + 1}) {fee.date}</span>
                    <span className="text-[#64748b]">|</span>
                    <span className="font-bold text-white tracking-wide">{fee.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-[#e2e8f0]">₹{fee.amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                    <span className="text-[10px] text-[#f43f5e] bg-[#f43f5e]/10 border border-[#f43f5e]/20 px-1.5 py-0.5 rounded ml-2 uppercase font-bold">
                      In {fee.daysLeft} Days
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === FEATURE 4: INCOME TAX LIQUIDITY METERS (COLUMN SPAN: 6) === */}
        <section className="lg:col-span-6 bg-[#14161f] border border-[#1e2230] rounded-xl p-5 flex flex-col justify-between">
          <div>
            <span className="text-[10px] tracking-widest text-[#64748b] uppercase font-bold block mb-3">Income Tax & Liquidity Simulator</span>
            <div className="flex justify-between items-baseline text-xs mt-1">
              <span className="text-[#64748b] font-bold">EST. TAX LIABILITY:</span>
              <span className="text-lg font-bold text-white tracking-wide">₹{taxData.estLiability.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            </div>
          </div>

          {/* Progressive Liquidity Threshold Bar Container */}
          <div className="mt-4">
            <div className="w-full bg-[#1a1d29] border border-[#222636] h-2.5 rounded-full overflow-hidden flex p-[1px]">
              <div 
                className="bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#a855f7] h-full rounded-full transition-all duration-500" 
                style={{ width: `${taxData.progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-[9px] text-[#474f6b] uppercase mt-2.5">
              <span>Remaining Dynamic Usable Liquidity Based on Current Earnings</span>
              <button 
                onClick={() => handleInspectRoute('authRoutes.js')} 
                className="text-[#00f2fe] hover:underline bg-[#00f2fe]/5 border border-[#00f2fe]/20 px-2 py-0.5 rounded font-bold transition-all duration-150"
              >
                View Bracket Model
              </button>
            </div>
          </div>
        </section>

        {/* === FEATURE 5: ADVANCED CATEGORICAL SPECTRUM (COLUMN SPAN: 12) === */}
        <section className="lg:col-span-12 bg-[#14161f] border border-[#1e2230] rounded-xl p-5">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] tracking-widest text-[#64748b] uppercase font-bold">Advanced Categorical Spending Overview</span>
            <span className="text-[14px] text-[#474f6b] cursor-pointer hover:text-white">•••</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            
            {/* Visual Equalizer Bar Spectrum Matrix Chart */}
            <div className="md:col-span-7 flex justify-between items-end h-36 bg-[#1a1d29] border border-[#222636] rounded-xl px-8 pb-4 pt-6 gap-2">
              {categories.map((cat, i) => (
                <div key={i} className="flex flex-col items-center flex-1 group">
                  <div className="w-full relative flex flex-col justify-end h-24">
                    <div className={`${cat.color} w-full ${cat.height} rounded-t transition-all duration-300 group-hover:brightness-125 shadow-[0_0_12px_rgba(0,0,0,0.4)] relative`}>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 bg-black text-[9px] px-1.5 py-0.5 rounded text-white border border-[#2d3247] whitespace-nowrap pointer-events-none z-10 transition-opacity duration-150">
                        ₹{cat.amount}
                      </div>
                    </div>
                  </div>
                  <span className="text-[9px] text-[#474f6b] uppercase font-bold mt-2 tracking-wider">{cat.name}</span>
                </div>
              ))}
            </div>

            {/* Structured Metric Ingestion Data Tables Grid */}
            <div className="md:col-span-5 text-xs text-[#64748b]">
              <div className="grid grid-cols-3 border-b border-[#1e2230] pb-1.5 mb-2 font-bold uppercase tracking-wider text-[10px] text-[#474f6b]">
                <span>Category</span>
                <span className="text-right">Actual</span>
                <span className="text-right">Value</span>
              </div>
              <div className="flex flex-col gap-1.5 max-h-[120px] overflow-y-auto pr-1">
                {categories.slice(0, 4).map((cat, idx) => (
                  <div key={idx} className="grid grid-cols-3 text-white font-mono hover:bg-[#1a1d29] py-0.5 rounded px-1 transition-colors duration-150">
                    <span className="text-[#64748b] font-bold">{idx + 1}) {cat.name.toUpperCase()}</span>
                    <span className="text-right text-[#e2e8f0]">₹{cat.amount.toLocaleString('en-IN')}</span>
                    <span className="text-right text-[#64748b]">₹{cat.value.toLocaleString('en-IN')}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default Dashboard;