import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  let token;

  // 🛡️ Intercept and verify incoming Authorization headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Isolate the raw cryptographic token payload string
      token = req.headers.authorization.split(' ')[1];

      // Decode signature matrix against your secret environmental key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the authenticated user profile object directly to the request line
      req.user = await User.findById(decoded.id).select('-password');

      return next(); // Pass verification checkpoint safely
    } catch (error) {
      console.error('❌ AUTHENTICATION_TOKEN_VERIFICATION_FAILED:', error.message);
      return res.status(401).json({ message: 'Session signature verification failed. Unauthorized access.' });
    }
  }

  // Fallback: If no token parameters exist inside headers
  if (!token) {
    return res.status(401).json({ message: 'Missing token signature routing header. Access denied.' });
  }
};