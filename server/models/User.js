import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    default: ''
  },
  residentialAddress: {
    type: String,
    default: ''
  },
  officeAddress: {
    type: String,
    default: ''
  },
  jobTitle: {
    type: String,
    default: ''
  },
  jobDetails: {
    type: String,
    default: ''
  },
  profilePhoto: {
    type: String,
    default: ''
  },
  settings: {
    baseCurrency: { type: String, default: 'INR' },
    biometricProtection: { type: Boolean, default: false },
    neonGlow: { type: Boolean, default: false },
    glassmorphicIntensity: { type: String, default: 'Classic Matte' },
    defaultTaxJurisdiction: { type: String, default: 'None' },
    liquidityThreshold: { type: Number, default: 40 },
    defaultAnalyticsWindow: { type: String, default: 'ALL' },
    workspaceMode: { type: String, enum: ['Normal', 'Business'], default: 'Normal' }
  }
}, {
  timestamps: true 
});

// Production-ready async pre-save hook (No 'next' callback needed)
userSchema.pre('save', async function () {
  if (!this.isModified('password')) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare incoming plain-text login attempt with database hash
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', userSchema);