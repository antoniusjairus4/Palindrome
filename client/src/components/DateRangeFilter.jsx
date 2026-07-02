import React from 'react';

export default function DateRangeFilter({ value, onChange }) {
  const options = ['30D', '90D', 'YTD', 'ALL'];

  return (
    <div className="flex bg-slate-150 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-0.5 rounded-lg text-xs font-semibold select-none">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
            value === opt
              ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm'
              : 'text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
