import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useCurrency } from '../../context/CurrencyContext';

export default function MarketPulseStrip({ pulseData, loading }) {
  const { formatValue, currency } = useCurrency();

  if (loading) {
    return (
      <div className="w-full flex items-center gap-4 overflow-hidden py-3 px-1">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-10 w-44 rounded-full bg-zinc-950 border border-zinc-900 animate-pulse flex-shrink-0"
          />
        ))}
      </div>
    );
  }

  if (!pulseData || pulseData.length === 0) {
    return null;
  }

  const formatPrice = (symbol, price) => {
    if (symbol.includes('GOLD')) {
      return formatValue(price);
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: price < 2 ? 4 : 2,
    }).format(price);
  };

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-3 px-1 scroll-smooth">
      <div className="flex items-center gap-4 min-w-max">
        <div className="flex items-center gap-1.5 mr-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest font-sans">
            Market Pulse
          </span>
        </div>
        
        {pulseData.map((item, idx) => {
          const isPositive = item.dailyChangePercentage >= 0;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 bg-zinc-950 border border-zinc-900 hover:border-zinc-800 rounded-full py-1.5 px-4.5 transition-all duration-300 backdrop-blur-sm select-none"
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-zinc-400 tracking-wider font-mono">
                  {item.symbol}
                </span>
                <span className="text-xs font-semibold text-white/95 mt-0.5">
                  {formatPrice(item.symbol, item.currentPrice)}
                </span>
              </div>
              <div
                className={`flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                  isPositive
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                }`}
              >
                {isPositive ? (
                  <ArrowUpRight className="w-2.5 h-2.5 shrink-0" />
                ) : (
                  <ArrowDownRight className="w-2.5 h-2.5 shrink-0" />
                )}
                {Math.abs(item.dailyChangePercentage).toFixed(2)}%
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
