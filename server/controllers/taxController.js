import { calculateTax, convertCurrency, getCountryCurrency } from '../utils/taxEngine.js';

// @desc    Estimate tax liability based on gross salary, country code, and base preferred currency
// @route   POST /api/tax/estimate
export const estimateTax = async (req, res) => {
  try {
    const { grossSalary, countryCode, baseCurrency } = req.body;

    if (grossSalary === undefined || !countryCode || !baseCurrency) {
      return res.status(400).json({ message: 'Missing parameters inside estimate payload' });
    }

    const numericSalary = parseFloat(grossSalary);
    if (isNaN(numericSalary) || numericSalary < 0) {
      return res.status(400).json({ message: 'Invalid gross salary amount' });
    }

    // 1. Resolve local currency of country code
    const localCurrency = getCountryCurrency(countryCode);

    // 2. Convert salary from base preferred currency to local country currency
    const localSalary = convertCurrency(numericSalary, baseCurrency, localCurrency);

    // 3. Compute tax in local country currency using progressive brackets
    const localTax = calculateTax(localSalary, countryCode);

    // 4. Convert calculated tax back to preferred base currency
    const baseTax = convertCurrency(localTax, localCurrency, baseCurrency);

    // 5. Calculate metrics
    const effectiveTaxRate = localSalary > 0 ? (localTax / localSalary) * 100 : 0;
    const baseLiquidity = numericSalary - baseTax;

    return res.status(200).json({
      taxLiability: Math.round(baseTax * 100) / 100,
      grossSalary: numericSalary,
      availableLiquidity: Math.round(baseLiquidity * 100) / 100,
      effectiveTaxRate: Math.round(effectiveTaxRate * 100) / 100,
      localCurrency,
      countryCode: countryCode.toUpperCase(),
    });
  } catch (error) {
    console.error('❌ ESTIMATE_TAX_EXCEPTION:', error.message);
    return res.status(500).json({ message: `Tax calculations service error: ${error.message}` });
  }
};
