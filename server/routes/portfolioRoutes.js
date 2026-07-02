import express from 'express';
import portfolioController from '../controllers/portfolioController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Secured portfolio routes
router.route('/assets')
  .get(protect, portfolioController.getAssets)
  .post(protect, portfolioController.addAsset);

router.route('/assets/:id')
  .delete(protect, portfolioController.deleteAsset);

router.route('/valuation')
  .get(protect, portfolioController.getValuation);

router.route('/verify')
  .get(protect, portfolioController.verifyTicker);

export default router;
