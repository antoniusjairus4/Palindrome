import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Load environmental variables immediately
dotenv.config();

const app = express();

// Initialize Database Connection
connectDB();

// Fixed CORS: Match your Vite client port (5173)
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
import authRoutes from './routes/authRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import taxRoutes from './routes/taxRoutes.js';
import userRoutes from './routes/userRoutes.js';
import marketRoutes from './routes/marketRoutes.js';

app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/tax', taxRoutes);
app.use('/api/user', userRoutes);
app.use('/api/market', marketRoutes);

app.get('/health', (req, res) => res.status(200).json({ status: "ONLINE", timestamp: new Date() }));

const PORT = process.env.PORT || 5000;

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`\x1b[36m[PALINDROME_SERVER] Network node running online over port execution lane: ${port}\x1b[0m`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`\x1b[33m[SERVER_ALERT] Port ${port} is in use, attempting fallback to port ${port + 1}...\x1b[0m`);
      startServer(port + 1);
    } else {
      console.error(`\x1b[31m[SERVER_FATAL] Startup error: ${err.message}\x1b[0m`);
    }
  });
};

startServer(Number(PORT));