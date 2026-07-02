import express from 'express';
import marketController from '../controllers/marketController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/pulse', protect, marketController.getMarketPulse);

export default router;
