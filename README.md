<div align="center">

<img src="./assets/banner-animated.gif" alt="Palindrome Hero Banner" width="100%" />

# Palindrome

*A simple, smart wealth tracker. See all your accounts in one place, and let our on-device AI organize your spending.*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build: Passing](https://img.shields.io/badge/Build-Passing-emerald.svg?style=flat-square)](#)
[![Version: 2.0](https://img.shields.io/badge/Version-2.0-indigo.svg?style=flat-square)](#)
[![PRs: Welcome](https://img.shields.io/badge/PRs-Welcome-violet.svg?style=flat-square)](https://github.com/antoniusjairus4/Palindrome/pulls)

</div>

---

## 💡 The "Why Palindrome?" Hook

Most modern personal finance apps do two things you probably don't love: they charge you a steep monthly subscription fee, and they sell your private transaction history to data brokers. 

We built **Palindrome** to change that. By using a local-first architecture, Palindrome runs entirely on your local machine. This keeps your financial data 100% private, runs at native-app speeds, and keeps our cloud hosting overhead at exactly zero—allowing us to keep the application completely free and open-source.

---

## 🎨 Interactive Features

### 🧠 Smart Auto-Categorization (Ghost AI)
*Just type what you bought. Our local, on-device AI (running in a background WebWorker) instantly categorizes your transaction without your data ever leaving your browser.*
<div align="center">
  <img src="./assets/ghost-ai-demo.gif" alt="Ghost AI Category Suggestion Demo" width="600" />
</div>

### 📈 Total Wealth Tracking
*Manage both manual portfolios (like physical assets and gold) and live digital assets under a unified dashboard. Get a crystal-clear picture of your true net worth in milliseconds.*
<div align="center">
  <img src="./assets/wealth-tracking-demo.gif" alt="Wealth Portfolio Tracking Demo" width="600" />
</div>

### 💸 Available Cash & Liquidity Buffer
*Track exactly how much fluid capital you have on hand. Separate long-term investments from your daily spending cash with custom liquidity alerts.*
<div align="center">
  <img src="./assets/available-cash-demo.gif" alt="Available Cash Liquidity Gauge Demo" width="600" />
</div>

---

## 🛠️ The Tech Stack

We use a modern, high-performance local-first tech stack to deliver desktop-speed processing in a browser window:

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFDF00)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Transformers.js](https://img.shields.io/badge/Transformers.js-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

---

## 🚀 Zero-Friction Quick Start
Act as a Lead Full-Stack Architect. We are adding a "Live Market Pulse" feature to the Palindrome Dashboard. This feature dynamically scans the user's portfolio and fetches real-time market rates ONLY for the specific assets, cryptocurrencies, or commodities they hold.

Please implement this full-stack architecture step-by-step:

## 1. Backend: Market Pulse Controller (`server/controllers/marketController.js`)
Create a new endpoint `GET /api/market/pulse`.
- **Step 1: Scan Holdings.** Query the database for the user's assets. Extract a unique array of Equity tickers, Crypto tickers, and a boolean flag if they hold any "Precious Metals" or "Gold" (even if manually valued).
- **Step 2: Fetch Live Rates (Zero-Cost APIs).** 
  - *Crypto:* Ping the CoinGecko API for the specific coins held.
  - *Equity:* Use `yahoo-finance2` to fetch the specific stock tickers.
  - *Gold / Precious Metals:* If the user holds gold, use `yahoo-finance2` to fetch `GC=F` (Gold Futures in USD) and `INR=X` (or their specific base currency exchange rate). Calculate the price of 1 gram of gold: `(Gold Price USD / 31.1035) * Exchange Rate`.
- **Step 3: Format Payload.** Return an array of objects containing: `symbol`, `name`, `currentPrice`, and `dailyChangePercentage`.

## 2. Backend: Route Integration (`server/routes/marketRoutes.js`)
- Wire up the new `marketController` to a protected route and mount it in `server.js` (e.g., `app.use('/api/market', marketRoutes)`).

## 3. Frontend: Market Pulse Component (`client/src/components/ui/MarketPulseStrip.jsx`)
Create a new sleek UI component to display these rates.
- **Design Aesthetic:** A sleek, horizontally scrolling marquee or a flex-row of compact, dark glassmorphic pills (`bg-zinc-900/50 border border-zinc-800`).
- **Data Display:** For each item in the payload, render:
  - The symbol/name (e.g., "BTC", "GOLD (1g)", "AAPL").
  - The live price formatted cleanly.
  - A small pill next to it showing the 24H change (e.g., `+2.4%` in green `text-emerald-400` or `-1.2%` in red `text-rose-400`).
- **Empty State:** If the user holds no trackable assets, return `null` so the strip remains invisibly hidden to avoid cluttering the UI.

## 4. Frontend: Dashboard Integration (`client/src/modules/Dashboard.jsx`)
- Import `MarketPulseStrip`.
- Mount it directly beneath the primary "Total Wealth" / "Liquidity" header cards, but above the Transaction History and Analytics charts.
- Fetch the data inside a `useEffect` on component mount, utilizing a subtle skeleton loader that matches the exact dimensions of the pills while the server fetches the rates.

Output the complete code for the backend controller, the new React UI component, and the updated Dashboard file. Ensure all styling strictly adheres to our clean, 2018-SaaS dark-mode aesthetic.
Get Palindrome running locally on your computer in less than two minutes.

### Prerequisites
- Node.js (v18 or higher)
- MongoDB running locally or a MongoDB Atlas connection URI

### Terminal 1: The Engine (Backend)
```bash
# Clone the repository
git clone https://github.com/antoniusjairus4/Palindrome.git
cd Palindrome/server

# Install dependencies
npm install

# Configure your environment variables (.env)
cp .env.example .env

# Spin up the backend API server
npm run dev
```

### Terminal 2: The Interface (Frontend)
```bash
# Navigate to the client workspace
cd Palindrome/client

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

Now open [http://localhost:5173](http://localhost:5173) in your browser and start tracking!

---

## 🔒 Architecture & Privacy Promise

Our core architectural principle is **Local-First, Privacy-Always**.

* **No Server-Side Telemetry:** We do not track page views, clicks, or financial metrics.
* **On-Device Machine Learning:** The Ghost AI categorizer uses `Transformers.js` to download lightweight classification weights once from HuggingFace. All classification inferences are run locally on your device's CPU/GPU inside a background thread.
* **Encrypted Storage:** Passwords are mathematically hashed using `bcryptjs` and session tokens are strictly stored as secure cookies.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.