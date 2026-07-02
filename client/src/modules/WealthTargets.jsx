import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, PiggyBank, Flame, Plus, AlertTriangle, 
  Sparkles, CheckCircle2, ChevronRight, HelpCircle 
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

// Mock/Initial State Data
const initialBudgets = [
  { id: '1', category: 'Food & Dining', spent: 8400, limit: 12000 },
  { id: '2', category: 'Entertainment', spent: 4500, limit: 5000 },
  { id: '3', category: 'Travel & Commute', spent: 6200, limit: 10000 },
  { id: '4', category: 'Shopping', spent: 9800, limit: 8000 },
];

const initialGoals = [
  { id: '1', title: 'Emergency Fund', current: 120000, target: 200000 },
  { id: '2', title: 'Tech Upgrade', current: 45000, target: 60000 },
  { id: '3', title: 'Vacation Fund', current: 25000, target: 100000 },
];

export const WealthTargets = () => {
  const { formatValue: formatCurrency } = useCurrency();
  
  // State
  const [budgets, setBudgets] = useState(initialBudgets);
  const [goals, setGoals] = useState(initialGoals);
  
  // Inline forms
  const [showAddBudget, setShowAddBudget] = useState(false);
  const [newBudgetCategory, setNewBudgetCategory] = useState('');
  const [newBudgetLimit, setNewBudgetLimit] = useState('');
  
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [newGoalTitle, setNewGoalTitle] = useState('');
  const [newGoalTarget, setNewGoalTarget] = useState('');
  
  // Milestone individual Add Funds inputs
  const [addFundAmounts, setAddFundAmounts] = useState({});

  // Handlers
  const handleAddBudget = (e) => {
    e.preventDefault();
    if (!newBudgetCategory || !newBudgetLimit) return;
    const newObj = {
      id: Date.now().toString(),
      category: newBudgetCategory,
      spent: 0,
      limit: parseFloat(newBudgetLimit)
    };
    setBudgets([...budgets, newObj]);
    setNewBudgetCategory('');
    setNewBudgetLimit('');
    setShowAddBudget(false);
  };

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!newGoalTitle || !newGoalTarget) return;
    const newObj = {
      id: Date.now().toString(),
      title: newGoalTitle,
      current: 0,
      target: parseFloat(newGoalTarget)
    };
    setGoals([...goals, newObj]);
    setNewGoalTitle('');
    setNewGoalTarget('');
    setShowAddGoal(false);
  };

  const handleAddFunds = (goalId) => {
    const amount = parseFloat(addFundAmounts[goalId]);
    if (isNaN(amount) || amount <= 0) return;

    setGoals(prev => prev.map(g => {
      if (g.id === goalId) {
        return { ...g, current: Math.min(g.target, g.current + amount) };
      }
      return g;
    }));

    // Clear input
    setAddFundAmounts(prev => ({ ...prev, [goalId]: '' }));
  };

  const handleInputChange = (goalId, value) => {
    setAddFundAmounts(prev => ({ ...prev, [goalId]: value }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="p-6 max-w-7xl mx-auto flex flex-col gap-6"
    >
      {/* Header Block */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 dark:border-white/5 pb-5">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-500" />
            Wealth Targets
          </h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Consolidated overview of active burn limits and strategic capital accumulation milestones.
          </p>
        </div>
      </div>

      {/* Main Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* SECTION A: Monthly Burn Limits */}
        <div className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl p-5 shadow-sm dark:shadow-none flex flex-col gap-4">
          <div className="flex justify-between items-center border-b border-slate-50 dark:border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-indigo-500" />
              <div>
                <h2 className="text-xs font-bold uppercase text-slate-800 dark:text-slate-200 tracking-wider">
                  Monthly Burn Limits
                </h2>
                <p className="text-[9px] text-slate-400 dark:text-slate-500">
                  Categorical spending bounds and limit thresholds.
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setShowAddBudget(!showAddBudget)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add Limit form */}
          <AnimatePresence>
            {showAddBudget && (
              <motion.form 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleAddBudget}
                className="overflow-hidden flex flex-col gap-3 bg-slate-50 dark:bg-white/5 p-3 rounded-lg border border-slate-100 dark:border-white/5"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[9px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">Category Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Shopping" 
                      value={newBudgetCategory}
                      onChange={(e) => setNewBudgetCategory(e.target.value)}
                      className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-1 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">Limit (₹)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 8000" 
                      value={newBudgetLimit}
                      onChange={(e) => setNewBudgetLimit(e.target.value)}
                      className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-1 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-indigo-500"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 text-[10px]">
                  <button 
                    type="button" 
                    onClick={() => setShowAddBudget(false)}
                    className="px-2.5 py-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-350 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-3 py-1 bg-indigo-650 hover:bg-indigo-700 text-white rounded font-medium transition-colors cursor-pointer"
                  >
                    Create Limit
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {/* List of Budgets */}
          <div className="flex flex-col gap-5">
            {budgets.map((b) => {
              const ratio = b.spent / b.limit;
              const isOver = ratio > 1.0;
              const percent = Math.min(100, Math.round(ratio * 100));

              return (
                <div key={b.id} className="group flex flex-col gap-1.5">
                  <div className="flex justify-between items-end text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{b.category}</span>
                      {isOver && (
                        <span className="flex items-center gap-0.5 text-[9px] bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-455 px-1 py-0.5 rounded font-bold uppercase tracking-wider">
                          <AlertTriangle className="w-2.5 h-2.5" /> Over Limit
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <span className="font-bold text-slate-700 dark:text-slate-300">{formatCurrency(b.spent)}</span>
                      <span className="text-slate-400 mx-1">/</span>
                      <span>{formatCurrency(b.limit)}</span>
                    </div>
                  </div>

                  {/* Slim progress bar track */}
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${percent}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`h-full rounded-full ${isOver ? 'bg-rose-500' : 'bg-indigo-500'}`}
                    />
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-semibold text-slate-400 dark:text-slate-500">
                    <span>{percent}% used</span>
                    <span>Remaining: {formatCurrency(Math.max(0, b.limit - b.spent))}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION B: Capital Milestones */}
        <div className="bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 rounded-xl p-5 shadow-sm dark:shadow-none flex flex-col gap-4">
          <div className="flex justify-between items-center border-b border-slate-50 dark:border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <PiggyBank className="w-4 h-4 text-emerald-650" />
              <div>
                <h2 className="text-xs font-bold uppercase text-slate-800 dark:text-slate-200 tracking-wider">
                  Capital Milestones
                </h2>
                <p className="text-[9px] text-slate-400 dark:text-slate-500">
                  Targeted fund accumulation goals.
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setShowAddGoal(!showAddGoal)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add Goal form */}
          <AnimatePresence>
            {showAddGoal && (
              <motion.form 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleAddGoal}
                className="overflow-hidden flex flex-col gap-3 bg-slate-50 dark:bg-white/5 p-3 rounded-lg border border-slate-100 dark:border-white/5"
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[9px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">Goal Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Tesla Model 3" 
                      value={newGoalTitle}
                      onChange={(e) => setNewGoalTitle(e.target.value)}
                      className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-1 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">Target Value (₹)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 50000" 
                      value={newGoalTarget}
                      onChange={(e) => setNewGoalTarget(e.target.value)}
                      className="w-full bg-transparent border-b border-slate-200 dark:border-white/10 py-1 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 text-[10px]">
                  <button 
                    type="button" 
                    onClick={() => setShowAddGoal(false)}
                    className="px-2.5 py-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-350 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-medium transition-colors cursor-pointer"
                  >
                    Create Milestone
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {/* List of Goals */}
          <div className="flex flex-col gap-6">
            {goals.map((g) => {
              const ratio = g.current / g.target;
              const isComplete = ratio >= 1.0;
              const percent = Math.min(100, Math.round(ratio * 100));
              const fundVal = addFundAmounts[g.id] || '';

              return (
                <div key={g.id} className="flex flex-col gap-2 p-3 bg-slate-50/50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 rounded-lg">
                  <div className="flex justify-between items-end text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{g.title}</span>
                      {isComplete && (
                        <span className="flex items-center gap-0.5 text-[9px] bg-emerald-50 dark:bg-emerald-950/20 text-emerald-650 dark:text-emerald-455 px-1 py-0.5 rounded font-bold uppercase tracking-wider">
                          <CheckCircle2 className="w-2.5 h-2.5" /> Fully Funded
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <span className="font-bold text-slate-700 dark:text-slate-300">{formatCurrency(g.current)}</span>
                      <span className="text-slate-400 mx-1">/</span>
                      <span>{formatCurrency(g.target)}</span>
                    </div>
                  </div>

                  {/* Mint Green progress bar track */}
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${percent}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-emerald-650"
                    />
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-semibold text-slate-450 dark:text-slate-500">
                    <span>{percent}% achieved</span>
                    <span>Remaining: {formatCurrency(Math.max(0, g.target - g.current))}</span>
                  </div>

                  {/* Add Funds Inline Form */}
                  {!isComplete && (
                    <div className="flex items-center gap-2 mt-1 pt-1 border-t border-slate-100/50 dark:border-white/5">
                      <input 
                        type="number" 
                        placeholder="Add funds (₹)..." 
                        value={fundVal}
                        onChange={(e) => handleInputChange(g.id, e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleAddFunds(g.id); }}
                        className="flex-1 bg-transparent border-b border-slate-200 dark:border-white/10 py-0.5 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500 placeholder-slate-400 dark:placeholder-slate-500"
                      />
                      <button
                        onClick={() => handleAddFunds(g.id)}
                        className="px-2 py-0.5 text-[10px] font-semibold text-emerald-650 dark:text-emerald-455 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-950/40 rounded transition-all cursor-pointer"
                      >
                        Add
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </motion.div>
  );
};

export default WealthTargets;
