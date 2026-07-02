import express from 'express';
import transactionController from '../controllers/transactionController.js';
// Pull your security verification layer to shield these pipelines
import { protect } from '../middleware/authMiddleware.js'; 

const router = express.Router();

// Secure all transaction routes with your protection middleware checkpoint
router.route('/')
  .get(protect, transactionController.getTransactions)
  .post(protect, transactionController.addTransaction);

router.route('/:id')
  .delete(protect, transactionController.deleteTransaction);

export default router; // ◄— Verified default export line