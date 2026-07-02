import { createContext, useContext, useState, useEffect } from 'react';

const UXModeContext = createContext(undefined);

const DICTIONARY = {
  'net worth': { business: 'Net Worth', normal: 'Total Wealth' },
  'asset valuation / holdings': { business: 'My Assets', normal: 'Things I Own' },
  'asset portfolio': { business: 'My Assets', normal: 'Things I Own' },
  'asset valuation': { business: 'My Assets', normal: 'Things I Own' },
  'total liabilities': { business: 'Liabilities', normal: 'Money I Owe' },
  'liabilities': { business: 'Liabilities', normal: 'Money I Owe' },
  'liquidity buffer': { business: 'Available Cash', normal: 'Safe to Spend' },
  'ghost ai inference routing': { business: 'Smart Auto-Categorization', normal: 'Smart Auto-Categorizing' },
  'ghost ai routing': { business: 'Smart Auto-Categorization', normal: 'Smart Auto-Categorizing' },
  'transaction ledger': { business: 'Transaction History', normal: 'History' },
  'audit ledger': { business: 'Transaction History', normal: 'History' }
};

export function UXModeProvider({ children }) {
  const [workspaceMode, setWorkspaceMode] = useState(() => {
    try {
      const stored = localStorage.getItem('__palindrome_settings');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.workspaceMode) return parsed.workspaceMode;
      }
    } catch (e) {}
    return 'Normal'; // Default is Normal as requested
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem('__palindrome_settings');
      const settings = stored ? JSON.parse(stored) : {};
      settings.workspaceMode = workspaceMode;
      localStorage.setItem('__palindrome_settings', JSON.stringify(settings));
    } catch (e) {}
  }, [workspaceMode]);

  const tUX = (term) => {
    if (!term) return '';
    const key = String(term).trim().toLowerCase();
    const match = DICTIONARY[key];
    if (match) {
      return workspaceMode === 'Business' ? match.business : match.normal;
    }
    return term;
  };

  return (
    <UXModeContext.Provider value={{ workspaceMode, setWorkspaceMode, tUX }}>
      {children}
    </UXModeContext.Provider>
  );
}

export const useUXMode = () => {
  const context = useContext(UXModeContext);
  if (!context) {
    throw new Error('useUXMode must be used within a UXModeProvider');
  }
  return context;
};
