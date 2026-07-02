import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, TrendingUp, Calendar, Lock, Scale, Shield, 
  Wallet, Trophy, Compass, Star, Filter 
} from 'lucide-react';

// SVG Progress Ring Component
const ProgressRing = ({ percent, color = '#4f46e5', size = 52 }) => {
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          className="text-slate-100 dark:text-white/5"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </svg>
      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold font-mono text-slate-800 dark:text-slate-200">
        {percent === 100 ? (
          <CheckCircle2 className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
        ) : (
          `${percent}%`
        )}
      </div>
    </div>
  );
};

// Discrete Progress Bar for Consistency loops
const DiscreteProgress = ({ current, target, isComplete }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full mt-2">
      <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        <span>Consistency Loop</span>
        <span className="font-mono">{current} / {target} Months</span>
      </div>
      <div className="flex gap-1.5">
        {Array.from({ length: target }).map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < current 
                ? (isComplete ? 'bg-emerald-600' : 'bg-indigo-500') 
                : 'bg-slate-100 dark:bg-white/5'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Mock Milestones Data
const initialMilestones = [
  // SECTION A: Accumulation Milestones
  {
    id: '1',
    category: 'accumulation',
    title: 'Liquidity Foundation',
    description: 'Funded a 3-month living expense reserve in high-yield liquid cash equivalents.',
    status: 'completed',
    type: 'ring',
    percent: 100,
    icon: Shield,
    date: 'Attained: Jan 15, 2026'
  },
  {
    id: '2',
    category: 'accumulation',
    title: 'Capital Threshold I',
    description: 'Accumulated first ₹1,00,000 in net investment capital reserves.',
    status: 'completed',
    type: 'ring',
    percent: 100,
    icon: Wallet,
    date: 'Attained: Mar 10, 2026'
  },
  {
    id: '3',
    category: 'accumulation',
    title: 'Investment Runway',
    description: 'Establish ₹5,00,000 liquid deployment capability for strategic equity positions.',
    status: 'in-progress',
    type: 'ring',
    percent: 45,
    icon: TrendingUp,
  },
  {
    id: '4',
    category: 'accumulation',
    title: 'Tax Shelter Optimization',
    description: 'Maximized ₹1,50,000 deployment to tax-exempt equity instruments.',
    status: 'in-progress',
    type: 'ring',
    percent: 80,
    icon: Lock,
  },
  // SECTION B: Consistency Metrics
  {
    id: '5',
    category: 'consistency',
    title: 'Overhead Governance',
    description: 'Maintained overhead spending strictly below the 70% income threshold for three consecutive months.',
    status: 'completed',
    type: 'discrete',
    current: 3,
    target: 3,
    icon: Scale,
    date: 'Attained: May 30, 2026'
  },
  {
    id: '6',
    category: 'consistency',
    title: 'Zero-Variance Month',
    description: 'Completed a monthly cycle with zero categorical budget limits breached.',
    status: 'completed',
    type: 'discrete',
    current: 1,
    target: 1,
    icon: CheckCircle2,
    date: 'Attained: Jun 02, 2026'
  },
  {
    id: '7',
    category: 'consistency',
    title: 'Ledger Continuity Loop',
    description: 'Logged every transaction within 24 hours of occurrence for six consecutive months.',
    status: 'in-progress',
    type: 'discrete',
    current: 4,
    target: 6,
    icon: Calendar,
  }
];

export const Achievements = () => {
  const [milestones, setMilestones] = useState(initialMilestones);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'accumulation', 'consistency'

  // Stagger Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  const filteredMilestones = milestones.filter(m => {
    if (activeTab === 'all') return true;
    return m.category === activeTab;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="p-6 max-w-7xl mx-auto flex flex-col gap-6"
    >
      {/* Header Panel */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 dark:border-white/5 pb-5">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Trophy className="w-5 h-5 text-indigo-500" />
            Performance Milestones
          </h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Data-driven tracking of key financial behavior benchmarks and discipline metrics.
          </p>
        </div>

        {/* Analytical Tab Filter */}
        <div className="flex bg-slate-100/80 dark:bg-white/5 border border-slate-200/40 dark:border-white/5 p-1 rounded-lg text-[10px] font-bold tracking-wider uppercase">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded transition-all cursor-pointer ${activeTab === 'all' ? 'bg-white dark:bg-white/10 text-slate-800 dark:text-white shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-350'}`}
          >
            All Metrics
          </button>
          <button 
            onClick={() => setActiveTab('accumulation')}
            className={`px-3 py-1.5 rounded transition-all cursor-pointer ${activeTab === 'accumulation' ? 'bg-white dark:bg-white/10 text-slate-800 dark:text-white shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-350'}`}
          >
            Accumulation
          </button>
          <button 
            onClick={() => setActiveTab('consistency')}
            className={`px-3 py-1.5 rounded transition-all cursor-pointer ${activeTab === 'consistency' ? 'bg-white dark:bg-white/10 text-slate-800 dark:text-white shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-350'}`}
          >
            Consistency
          </button>
        </div>
      </div>

      {/* Grid of Milestone Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredMilestones.map((m) => {
          const Icon = m.icon;
          const isComplete = m.status === 'completed';

          return (
            <motion.div
              key={m.id}
              variants={itemVariants}
              className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 p-5 rounded-xl shadow-sm dark:shadow-none transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-200/50 dark:hover:shadow-none flex flex-col justify-between min-h-[170px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  {/* Category Pill Tag */}
                  <span className={`text-[8px] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded w-max ${
                    m.category === 'accumulation' 
                      ? 'bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400' 
                      : 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-455'
                  }`}>
                    {m.category}
                  </span>

                  <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">{m.title}</h3>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-relaxed mt-1">{m.description}</p>
                </div>

                {/* Ring Visual (for Savings / Net Worth) */}
                {m.type === 'ring' && (
                  <ProgressRing 
                    percent={m.percent} 
                    color={isComplete ? '#059669' : '#4f46e5'} 
                  />
                )}

                {/* Icon visual for Consistency when not ring */}
                {m.type === 'discrete' && (
                  <div className={`p-2.5 rounded-lg shrink-0 ${isComplete ? 'bg-emerald-50 dark:bg-emerald-950/10 text-emerald-600 dark:text-emerald-455' : 'bg-indigo-50 dark:bg-indigo-950/10 text-indigo-600 dark:text-indigo-400'}`}>
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                )}
              </div>

              {/* Progress and Footer Status */}
              <div className="mt-4 pt-3 border-t border-slate-50 dark:border-white/5 flex flex-col gap-2">
                {m.type === 'discrete' && (
                  <DiscreteProgress 
                    current={m.current} 
                    target={m.target} 
                    isComplete={isComplete} 
                  />
                )}

                <div className="flex items-center justify-between mt-1 text-[9px] font-semibold">
                  <span className={`flex items-center gap-1 ${isComplete ? 'text-emerald-600 dark:text-emerald-455' : 'text-indigo-500'}`}>
                    {isComplete ? (
                      <>
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Completed</span>
                      </>
                    ) : (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                        <span>Tracking Active</span>
                      </>
                    )}
                  </span>
                  {m.date && (
                    <span className="text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                      {m.date}
                    </span>
                  )}
                </div>
              </div>

            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Achievements;