import express from 'express';
import { estimateTax } from '../controllers/taxController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/estimate', protect, estimateTax);

export default router;
