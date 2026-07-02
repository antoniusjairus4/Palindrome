import express from 'express';
// Assuming your authentication processing file uses modern defaults
import authController from '../controllers/authController.js'; 

const router = express.Router();

// Your mapping rules
router.post('/register', authController.register || authController);
router.post('/login', authController.login || authController);

// ◄— This is the magic line your server.js is hunting for!
export default router;