import { Terminal } from 'lucide-react';

export default function EmptyState({ title = "No records found", description = "The database returned an empty set for this query partition." }) {
  return (
    <div className="w-full border border-dashed border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black rounded-2xl p-12 text-center flex flex-col items-center justify-center min-h-[360px] animate-in fade-in duration-300 shadow-sm dark:shadow-none">
      <div className="p-3 bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 rounded-xl text-slate-400 dark:text-slate-500 mb-4">
        <Terminal className="w-5 h-5 stroke-[1.5]" />
      </div>
      <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-wider uppercase mb-1">{title}</h3>
      <p className="text-slate-450 dark:text-slate-500 text-xs font-sans max-w-sm leading-relaxed mx-auto">{description}</p>
    </div>
  );
}