import { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext(undefined);

export const CURRENCY_REGISTRY = {
  USD: { symbol: '$', label: 'USD', locale: 'en-US' },
  INR: { symbol: '₹', label: 'INR', locale: 'en-IN' },
  EUR: { symbol: '€', label: 'EUR', locale: 'en-DE' },
  GBP: { symbol: '£', label: 'GBP', locale: 'en-GB' },
  JPY: { symbol: '¥', label: 'JPY', locale: 'ja-JP' },
  CNY: { symbol: '¥', label: 'CNY', locale: 'zh-CN' },
  AUD: { symbol: 'A$', label: 'AUD', locale: 'en-AU' },
  CAD: { symbol: 'C$', label: 'CAD', locale: 'en-CA' },
  SGD: { symbol: 'S$', label: 'SGD', locale: 'en-SG' },
  AED: { symbol: 'د.إ', label: 'AED', locale: 'ar-AE' },
  CHF: { symbol: 'CHF', label: 'fr-CH', locale: 'fr-CH' },
};

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(() => localStorage.getItem('__palindrome_currency') || localStorage.getItem('__curie_currency') || 'USD');

  useEffect(() => {
    localStorage.setItem('__palindrome_currency', currency);
  }, [currency]);

  const formatValue = (value) => {
    const config = CURRENCY_REGISTRY[currency];
    return new Intl.NumberFormat(config.locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    }).format(value);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatValue, config: CURRENCY_REGISTRY[currency] }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);