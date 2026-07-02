import express from 'express';
import { getUserProfile, updateUserProfile, updateUserSettings } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.route('/settings')
  .put(protect, updateUserSettings);

export default router;
