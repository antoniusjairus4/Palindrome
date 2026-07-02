import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Shield, Coins, KeyRound, Zap } from 'lucide-react';
import axios from 'axios';

import LightPillar from '../components/LightPillar';
import logoDark from '../assets/logo_dark.png';

export default function Landing() {
  const navigate = useNavigate();

  // Auth Modal States
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  
  // Auth Form Inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const targetUrl = isLogin 
      ? 'http://localhost:5000/api/auth/login' 
      : 'http://localhost:5000/api/auth/register';

    const payload = isLogin 
      ? { email, password } 
      : { name, email, password };

    try {
      const response = await axios.post(targetUrl, payload);
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userName', response.data.name || name || 'Operator');
        setShowAuthModal(false);
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed. Please verify server state.');
    } finally {
      setLoading(false);
    }
  };

  const openAuth = (mode) => {
    setIsLogin(mode === 'login');
    setError('');
    setShowAuthModal(true);
  };

  return (
    <div className="text-white min-h-screen selection:bg-white selection:text-black font-sans relative">
      
      {/* 1. Z-Index & Background Transparency Fix (-z-10 layer) */}
      <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px'
          }}
        />
        <LightPillar
          topColor="#4f46e5"
          bottomColor="#000000"
          intensity={1.0}
          rotationSpeed={0.3}
          glowAmount={0.005}
          pillarWidth={3.0}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={0}
          interactive={true}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      {/* 3. Navbar Overhaul */}
      <header className="fixed top-0 left-0 w-full z-40 bg-black/30 border-b border-white/5 backdrop-blur-md px-8 py-4 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-3">
          <img src={logoDark} alt="Palindrome Logo" className="h-6 w-auto object-contain" />
          <span className="text-xs font-semibold tracking-wider uppercase font-sans text-white/90">
            Palindrome
          </span>
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => openAuth('login')}
            className="text-white/80 hover:text-white transition-colors text-xs font-semibold cursor-pointer"
          >
            Sign In
          </button>
          <button 
            onClick={() => openAuth('register')}
            className="bg-white text-black rounded-full px-5 py-1.5 text-xs font-semibold hover:bg-white/90 transition-all cursor-pointer"
          >
            Create Account
          </button>
        </div>
      </header>

      {/* 2. Scroll Snapping Magnet Container with Pass-Through Events */}
      <main className="relative z-10 w-full bg-transparent">
        
        {/* SECTION 1: THE HERO (h-screen to command initial viewport) */}
        <section id="hero-section" className="h-screen w-full snap-start flex flex-col items-center justify-center shrink-0 relative px-6 text-center bg-transparent">
          
          {/* Left Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[8%] top-[30%] hidden xl:flex flex-col bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-5 w-64 text-left select-none shadow-2xl backdrop-blur-sm pointer-events-none"
          >
            <div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mb-1">Asset Allocation</div>
            <div className="text-xl font-bold text-white font-mono">$1,245,780.00</div>
            <div className="mt-3 h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full" style={{ width: '65%' }} />
            </div>
            <div className="flex justify-between text-[9px] text-zinc-500 mt-1.5 font-mono">
              <span>Liquid Cash</span>
              <span>65%</span>
            </div>
          </motion.div>

          {/* Right Floating Card */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[8%] top-[34%] hidden xl:flex flex-col bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-5 w-64 text-left select-none shadow-2xl backdrop-blur-sm pointer-events-none"
          >
            <div className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mb-1">Recent Outflows</div>
            <div className="text-xl font-bold text-rose-500 font-mono">-$120.50</div>
            <div className="text-[9px] text-zinc-455 mt-3 font-mono flex items-center justify-between">
              <span>Smart category</span>
              <span className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-zinc-300 font-sans text-[8px] font-semibold">Software</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl flex flex-col items-center justify-center gap-8 pointer-events-auto z-10"
          >
            <div className="flex flex-col items-center text-center">
              <img src={logoDark} alt="Palindrome Logo" className="h-16 md:h-20 w-auto object-contain mx-auto mb-6" />
              <p className="text-indigo-400 text-[10px] md:text-[11px] font-semibold mb-4 font-body">
                Version 2.0 // Personal Finance Assistant
              </p>
              <h1 
                className="text-5xl md:text-8xl font-medium tracking-tight mb-6 font-heading italic text-transparent bg-gradient-to-b from-white via-white to-white/70 bg-clip-text leading-none animate-in fade-in duration-700"
              >
                Let's simplify shall we?
              </h1>
              <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto font-body font-light leading-relaxed mt-6">
                From left to right, see straight through your money. We organize every transaction, your real time networth, ur asset accounted, budget and how ur money is spent completely private.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-6 justify-center">
              <button 
                onClick={() => openAuth('register')}
                className="bg-white text-black rounded-full px-8 py-3.5 text-xs font-semibold hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center gap-2 cursor-pointer group shadow-lg"
              >
                Get Started
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => {
                  const section2 = document.getElementById('feature-1');
                  if (section2) section2.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white/60 hover:text-white transition-colors text-xs font-semibold cursor-pointer"
              >
                How it Works
              </button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none z-20">
            <span className="text-[9px] text-white/40 font-body animate-pulse">
              Scroll to explore
            </span>
            <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ 
                  y: [0, 8, 0],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-1.5 h-1.5 bg-indigo-400 rounded-full"
              />
            </div>
          </div>
        </section>

        {/* Feature modules scroll stack wrapper */}
        <div className="relative w-full bg-transparent">
          {/* SECTION 2: FEATURE A (Sticky top-[10vh], naturally sized) */}
          <section id="feature-1" className="sticky top-[10vh] snap-start min-h-[60vh] flex items-center justify-center shrink-0 relative px-4 bg-transparent py-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-zinc-950 border border-zinc-800 border-t-zinc-700 shadow-2xl rounded-3xl p-10 max-w-4xl w-full mx-auto z-10 flex flex-col gap-6 pointer-events-auto"
          >

            <h2 className="text-3xl md:text-4xl font-heading italic text-white tracking-wide leading-tight">
              See Your Whole Net Worth
            </h2>
            <p className="text-white/60 text-sm md:text-base font-body leading-relaxed font-light">
              Stop logging into five different banks. Palindrome groups your cash, investments, and credit cards into a single, real-time total.
            </p>
          </motion.div>
        </section>

        {/* SECTION 3: FEATURE B (Sticky top-[14vh], naturally sized) */}
        <section id="feature-2" className="sticky top-[14vh] snap-start min-h-[60vh] flex items-center justify-center shrink-0 relative px-4 bg-transparent py-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-zinc-950 border border-zinc-800 border-t-zinc-700 shadow-2xl rounded-3xl p-10 max-w-4xl w-full mx-auto z-20 flex flex-col gap-6 pointer-events-auto"
          >

            <h2 className="text-3xl md:text-4xl font-heading italic text-white tracking-wide leading-tight">
              Smart Auto-Categorization
            </h2>
            <p className="text-white/60 text-sm md:text-base font-body leading-relaxed font-light">
              Simply type what you bought (like "Uber to airport" or "AWS hosting"), and our assistant automatically labels the transaction and puts it in the right category so you wont have to waste your time.....
            </p>
          </motion.div>
        </section>

        {/* SECTION 4: FEATURE C (Sticky top-[18vh], naturally sized) */}
        <section id="feature-3" className="sticky top-[18vh] snap-start min-h-[60vh] flex items-center justify-center shrink-0 relative px-4 bg-transparent py-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-zinc-950 border border-zinc-800 border-t-zinc-700 shadow-2xl rounded-3xl p-10 max-w-4xl w-full mx-auto z-30 flex flex-col gap-6 pointer-events-auto"
          >

            <h2 className="text-3xl md:text-4xl font-heading italic text-white tracking-wide leading-tight">
              Simple Spending Budgets
            </h2>
            <p className="text-white/60 text-sm md:text-base font-body leading-relaxed font-light">
              Set monthly spending limits and track your savings goals with clean progress bars. We focus on clean data instead of point systems or badges.
            </p>
          </motion.div>
        </section>

        {/* SECTION 5: FEATURE D (Sticky top-[22vh], naturally sized) */}
        <section id="feature-4" className="sticky top-[22vh] snap-start min-h-[60vh] flex items-center justify-center shrink-0 relative px-4 bg-transparent py-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-zinc-950 border border-zinc-800 border-t-zinc-700 shadow-2xl rounded-3xl p-10 max-w-4xl w-full mx-auto z-40 flex flex-col gap-6 pointer-events-auto"
          >

            <h2 className="text-3xl md:text-4xl font-heading italic text-white tracking-wide leading-tight">
              Automatic Receipt Importer
            </h2>
            <p className="text-white/60 text-sm md:text-base font-body leading-relaxed font-light">
              No manual uploads or bank passwords required. The app can read receipts and bills directly from your emails to keep your records updated instantly.
            </p>
          </motion.div>
        </section>

        {/* SECTION 6: FEATURE E (Sticky top-[26vh], naturally sized) */}
        <section id="feature-5" className="sticky top-[26vh] snap-start min-h-[60vh] flex items-center justify-center shrink-0 relative px-4 bg-transparent py-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-zinc-950 border border-zinc-800 border-t-zinc-700 shadow-2xl rounded-3xl p-10 max-w-4xl w-full mx-auto z-50 flex flex-col gap-6 pointer-events-auto"
          >

            <h2 className="text-3xl md:text-4xl font-heading italic text-white tracking-wide leading-tight">
              Multi-Currency Support
            </h2>
            <p className="text-white/60 text-sm md:text-base font-body leading-relaxed font-light">
              Track money in any currency. The app automatically updates currency rates and displays your total value in your preferred home currency.
            </p>
          </motion.div>
        </section>

        {/* SECTION 7: FEATURE F (Sticky top-[30vh], naturally sized) */}
        <section id="feature-6" className="sticky top-[30vh] snap-start min-h-[60vh] flex items-center justify-center shrink-0 relative px-4 bg-transparent py-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-zinc-950 border border-zinc-800 border-t-zinc-700 shadow-2xl rounded-3xl p-10 max-w-4xl w-full mx-auto z-60 flex flex-col gap-6 pointer-events-auto"
          >

            <h2 className="text-3xl md:text-4xl font-heading italic text-white tracking-wide leading-tight">
              Private PDF Invoices
            </h2>
            <p className="text-white/60 text-sm md:text-base font-body leading-relaxed font-light">
              Create and send clean, professional invoices to clients without revealing any other private bank accounts or balances.
            </p>
          </motion.div>
        </section>
        </div>

        {/* SECTION 8: WHY PALINDROME? */}
        <section id="why-palindrome" className="snap-start min-h-screen flex flex-col items-center justify-center relative px-6 py-24 bg-transparent shrink-0">
          <div className="max-w-5xl w-full mx-auto z-10 flex flex-col gap-6 pointer-events-auto">
            
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-4 font-heading italic text-transparent bg-gradient-to-b from-white via-white to-white/70 bg-clip-text leading-none">
                Why Palindrome?
              </h2>
              <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto font-body font-light leading-relaxed">
                A decentralized, local-first wealth dashboard built to protect your financial freedom.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {/* Card 1: Absolute Data Privacy */}
              <div className="bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700/85 rounded-2xl p-8 flex gap-6 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-white">Absolute Data Privacy</h3>
                  <p className="text-white/50 text-xs md:text-sm font-light leading-relaxed">
                    Your financial data never leaves your device. All calculations, categorizations, and records are processed locally in your browser. No tracking, no advertiser profiling, no cloud leaks.
                  </p>
                </div>
              </div>

              {/* Card 2: Zero Subscriptions */}
              <div className="bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700/85 rounded-2xl p-8 flex gap-6 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Coins className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-white">Zero Subscription Fees</h3>
                  <p className="text-white/50 text-xs md:text-sm font-light leading-relaxed">
                    Traditional wealth trackers charge monthly cloud fees. Palindrome runs entirely on local compute, eliminating database hosting overhead so you can manage your wealth completely free.
                  </p>
                </div>
              </div>

              {/* Card 3: No Sensitive Integrations */}
              <div className="bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700/85 rounded-2xl p-8 flex gap-6 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <KeyRound className="w-6 h-6 text-amber-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-white">No Sensitive Linkage</h3>
                  <p className="text-white/50 text-xs md:text-sm font-light leading-relaxed">
                    We don't ask for your bank credentials or API keys. Update your balances manually or upload secure transactions with complete peace of mind and zero security risks.
                  </p>
                </div>
              </div>

              {/* Card 4: Lightning Fast Performance */}
              <div className="bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700/85 rounded-2xl p-8 flex gap-6 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-rose-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-white">Lightning Fast Engine</h3>
                  <p className="text-white/50 text-xs md:text-sm font-light leading-relaxed">
                    Standard progressive tax engines, multi-currency conversions, and live graphs render instantly. Experience desktop-speed interactions without API loading delays.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <button 
                onClick={() => openAuth('register')}
                className="bg-white text-black rounded-full px-8 py-3.5 text-xs font-semibold hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center gap-2 cursor-pointer group shadow-lg mx-auto"
              >
                Start Managing Your Wealth
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </section>

        {/* Bottom spacer to allow the final card to scroll and stack neatly */}
        <div className="h-[20vh] w-full shrink-0" />

      </main>

      {/* MERN Auth Modal Overlay */}
      <AnimatePresence>
        {showAuthModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Blur Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAuthModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Panel Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative z-10 w-full max-w-md bg-zinc-950 rounded-2xl p-8 border border-zinc-800 shadow-2xl text-left"
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setShowAuthModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Form Toggles */}
              <div className="flex border-b border-zinc-900 mb-6 pb-3 gap-6">
                <button 
                  type="button"
                  onClick={() => { setIsLogin(true); setError(''); }} 
                  className={`text-xs font-bold uppercase tracking-wider transition-all relative ${isLogin ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                >
                  Sign In
                  {isLogin && <span className="absolute -bottom-[13px] left-0 w-full h-[2px] bg-white" />}
                </button>
                <button 
                  type="button"
                  onClick={() => { setIsLogin(false); setError(''); }} 
                  className={`text-xs font-bold uppercase tracking-wider transition-all relative ${!isLogin ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                >
                  Create Account
                  {!isLogin && <span className="absolute -bottom-[13px] left-0 w-full h-[2px] bg-white" />}
                </button>
              </div>

              {/* Error Notice block */}
              {error && (
                <div className="mb-4 text-xs text-rose-400 bg-rose-950/20 border border-rose-900/30 px-3 py-2.5 rounded font-medium border-l-2 border-l-rose-500">
                  {error}
                </div>
              )}

              {/* Form inputs */}
              <form onSubmit={handleAuthSubmit} className="flex flex-col gap-5">
                
                {!isLogin && (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-wider font-semibold text-white/50">Operator Name</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="e.g. Antonius Jairus" 
                      className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-zinc-700 transition-colors placeholder:text-white/20 tracking-wide font-sans" 
                    />
                  </div>
                )}
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-white/50">Security Email</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="jairus@example.com" 
                    className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-zinc-700 transition-colors placeholder:text-white/20 tracking-wide font-sans" 
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-semibold text-white/50">Passphrase</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••••••" 
                    className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-zinc-700 transition-colors placeholder:text-white/20 tracking-wide font-sans" 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full mt-2 bg-white hover:bg-white/90 disabled:bg-white/20 disabled:text-white/40 text-black rounded text-xs tracking-widest uppercase py-3.5 font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  {loading ? 'Validating credentials...' : isLogin ? 'Access Node' : 'Register Operator'}
                </button>
              </form>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}