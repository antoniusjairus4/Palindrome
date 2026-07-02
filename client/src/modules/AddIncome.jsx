import EmptyState from '../components/EmptyState';

export default function AddIncome() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-200 font-sans">
      <div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Record Income</h1>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Inbound revenue lane to capture manual deposits and incoming payments.</p>
      </div>
      <EmptyState 
        title="No Income Records" 
        description="The system has detected zero manual or recurring deposit entries inside this path." 
      />
    </div>
  );
}