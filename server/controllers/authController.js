import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// Helper function to sign JSON Web Tokens
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register a new operator node safely with baseline fallbacks
// @route   POST /api/auth/register
const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // 1. Guard against empty structural fields in the incoming network stream
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing required credential parameters inside ingestion payload' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists inside network registry' });
    }

    // 2. Commit the user document layer cleanly
    const user = await User.create({
      name,
      email,
      password
    });

    if (user) {
      // 3. Return a successful response matrix
      return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      return res.status(400).json({ message: 'Invalid user registration payload data' });
    }
  } catch (error) {
    console.error('❌ USER_REGISTRATION_EXCEPTION:', error.message);
    return res.status(500).json({ message: `Internal server pipeline fault: ${error.message}` });
  }
};

// @desc    Authenticate operator credentials
// @route   POST /api/auth/login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      return res.status(401).json({ message: 'Invalid email routing or cryptographic password' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// ⚠️ THE CRITICAL EXPORT SECTION THAT GOT CUT OFF ⚠️
const authController = { register, login };
export default authController;