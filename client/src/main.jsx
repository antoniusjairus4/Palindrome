import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n.js';
import { CurrencyProvider } from './context/CurrencyContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { UXModeProvider } from './context/UXModeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CurrencyProvider>
        <UXModeProvider>
          <App />
        </UXModeProvider>
      </CurrencyProvider>
    </ThemeProvider>
  </React.StrictMode>
);