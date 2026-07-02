import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      taxCalculator: "Tax & Liquidity Calculator",
      estimatedTax: "Estimated Tax",
      availableLiquidity: "Available Liquidity",
      annualGrossSalary: "Annual Gross Salary",
      countryOfResidence: "Country of Tax Residence",
      calculating: "Calculating...",
      interactive: "Interactive",
      selectCountry: "Select Country",
      unitedStates: "United States",
      unitedKingdom: "United Kingdom",
      india: "India",
      other: "Other (Global Flat Rate)",
      liquidityDescription: "Liquidity = Assets - Liability - Subscriptions",
      effectiveRate: "Effective Rate",
    }
  },
  es: {
    translation: {
      taxCalculator: "Calculadora de Impuestos y Liquidez",
      estimatedTax: "Impuesto Estimado",
      availableLiquidity: "Liquidez Disponible",
      annualGrossSalary: "Salario Bruto Anual",
      countryOfResidence: "País de Residencia Fiscal",
      calculating: "Calculando...",
      interactive: "Interactivo",
      selectCountry: "Seleccionar País",
      unitedStates: "Estados Unidos",
      unitedKingdom: "Reino Unido",
      india: "India",
      other: "Otro (Tasa Fija Global)",
      liquidityDescription: "Liquidez = Activos - Pasivos - Suscripciones",
      effectiveRate: "Tasa Efectiva",
    }
  },
  fr: {
    translation: {
      taxCalculator: "Calculateur d'Impôts et Liquidité",
      estimatedTax: "Impôt Estimé",
      availableLiquidity: "Liquidité Disponible",
      annualGrossSalary: "Salaire Brut Annuel",
      countryOfResidence: "Pays de Résidence Fiscale",
      calculating: "Calcul en cours...",
      interactive: "Interactif",
      selectCountry: "Sélectionner le Pays",
      unitedStates: "États-Unis",
      unitedKingdom: "Royaume-Uni",
      india: "Inde",
      other: "Autre (Taux Forfaitaire Global)",
      liquidityDescription: "Liquidité = Actifs - Passif - Abonnements",
      effectiveRate: "Taux Effectif",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
