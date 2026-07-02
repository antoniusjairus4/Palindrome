// Scalable Progressive Tax Brackets & Multi-Currency Engine
// Includes Standard Deductions, Personal Allowances, and Section 87A Tax Rebates

const EXCHANGE_RATES_TO_USD = {
  USD: 1.0,
  EUR: 1.08,
  GBP: 1.28,
  INR: 0.012,
  CAD: 0.73,
  AUD: 0.66,
  JPY: 0.0064,
  CNY: 0.14,
  CHF: 1.11,
  HKD: 0.13,
  SGD: 0.74,
  SEK: 0.095,
  KRW: 0.00073,
  NOK: 0.094,
  NZD: 0.61,
  MXN: 0.054,
  ZAR: 0.055,
  TRY: 0.031,
  BRL: 0.18,
  RUB: 0.011,
};

const COUNTRY_TO_LOCAL_CURRENCY = {
  US: 'USD',
  GB: 'GBP',
  UK: 'GBP',
  IN: 'INR',
  FR: 'EUR',
  DE: 'EUR',
  ES: 'EUR',
  CA: 'CAD',
  AU: 'AUD',
  JP: 'JPY',
  CN: 'CNY',
};

// Configurable regional tax parameters
const TAX_CONFIGS = {
  US: {
    standardDeduction: 15000,
    brackets: [
      { limit: 11600, rate: 0.10 },
      { limit: 47150, rate: 0.12 },
      { limit: 100525, rate: 0.22 },
      { limit: 191950, rate: 0.24 },
      { limit: 243725, rate: 0.32 },
      { limit: 609350, rate: 0.35 },
      { limit: Infinity, rate: 0.37 }
    ]
  },
  UK: {
    personalAllowance: 12570,
    taperThreshold: 100000,
    brackets: [
      { limit: 37700, rate: 0.20 },   // Basic Rate
      { limit: 112570, rate: 0.40 },  // Higher Rate
      { limit: Infinity, rate: 0.45 } // Additional Rate
    ]
  },
  IN: {
    standardDeduction: 75000,
    rebateCeiling: 1200000, // Section 87A rebate ceiling (taxable income <= ₹12L has zero tax liability)
    brackets: [
      { limit: 400000, rate: 0.00 },
      { limit: 800000, rate: 0.05 },
      { limit: 1200000, rate: 0.10 },
      { limit: 1600000, rate: 0.15 },
      { limit: 2000000, rate: 0.20 },
      { limit: Infinity, rate: 0.30 }
    ]
  }
};

// Returns currency conversion rate to USD dynamically
export const getRateToUSD = (currency) => {
  const code = currency.toUpperCase();
  if (EXCHANGE_RATES_TO_USD[code] !== undefined) {
    return EXCHANGE_RATES_TO_USD[code];
  }
  // Deterministic mock exchange rate generator for any other currency code
  let hash = 0;
  for (let i = 0; i < code.length; i++) {
    hash = code.charCodeAt(i) + ((hash << 5) - hash);
  }
  const mockRate = 0.05 + (Math.abs(hash) % 100) / 20.0; // Between 0.05 and 5.05
  return mockRate;
};

// Converts between any two currencies via USD
export const convertCurrency = (amount, from, to) => {
  if (!from || !to || from.toUpperCase() === to.toUpperCase()) return amount;
  const amountInUSD = amount * getRateToUSD(from);
  const targetAmount = amountInUSD / getRateToUSD(to);
  return targetAmount;
};

// Returns standard ISO currency code for a given country code
export const getCountryCurrency = (countryCode) => {
  return COUNTRY_TO_LOCAL_CURRENCY[countryCode.toUpperCase()] || 'USD';
};

// Helper: Standard progressive bracket calculator
const evaluateProgressiveBrackets = (taxableIncome, brackets) => {
  let tax = 0;
  let remaining = taxableIncome;
  let previousLimit = 0;

  for (const bracket of brackets) {
    const taxableInBracket = Math.min(remaining, bracket.limit - previousLimit);
    if (taxableInBracket <= 0) break;
    tax += taxableInBracket * bracket.rate;
    remaining -= taxableInBracket;
    previousLimit = bracket.limit;
  }
  return tax;
};

// Computes progressive tax liability based on country code
export const calculateTax = (income, countryCode) => {
  const code = countryCode.toUpperCase();

  // If the country code is not registered, use fallback global flat rate
  if (code !== 'US' && code !== 'GB' && code !== 'UK' && code !== 'IN') {
    return income * 0.25;
  }

  switch (code) {
    case 'US': {
      const config = TAX_CONFIGS.US;
      const taxableIncome = Math.max(0, income - config.standardDeduction);
      return evaluateProgressiveBrackets(taxableIncome, config.brackets);
    }
    case 'GB':
    case 'UK': {
      const config = TAX_CONFIGS.UK;
      // Calculate UK Personal Allowance with Tapering
      // Personal allowance is reduced by £1 for every £2 earned above £100,000
      const excess = Math.max(0, income - config.taperThreshold);
      const reduction = excess / 2;
      const allowance = Math.max(0, config.personalAllowance - reduction);
      const taxableIncome = Math.max(0, income - allowance);
      return evaluateProgressiveBrackets(taxableIncome, config.brackets);
    }
    case 'IN': {
      const config = TAX_CONFIGS.IN;
      // Subtract standard deduction
      const taxableIncome = Math.max(0, income - config.standardDeduction);
      
      // If taxable income is below or equal to Section 87A rebate ceiling, tax is exactly ₹0
      if (taxableIncome <= config.rebateCeiling) {
        return 0;
      }
      
      // Otherwise calculate the full tax progressively
      return evaluateProgressiveBrackets(taxableIncome, config.brackets);
    }
    default:
      return income * 0.25;
  }
};
