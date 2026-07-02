import User from '../models/User.js';

// @desc    Get user profile details
// @route   GET /api/user/profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update user profile details
// @route   PUT /api/user/profile
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.mobileNumber = req.body.mobileNumber !== undefined ? req.body.mobileNumber : user.mobileNumber;
      user.residentialAddress = req.body.residentialAddress !== undefined ? req.body.residentialAddress : user.residentialAddress;
      user.officeAddress = req.body.officeAddress !== undefined ? req.body.officeAddress : user.officeAddress;
      user.jobTitle = req.body.jobTitle !== undefined ? req.body.jobTitle : user.jobTitle;
      user.jobDetails = req.body.jobDetails !== undefined ? req.body.jobDetails : user.jobDetails;
      user.profilePhoto = req.body.profilePhoto !== undefined ? req.body.profilePhoto : user.profilePhoto;

      const updatedUser = await user.save();
      
      res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        mobileNumber: updatedUser.mobileNumber,
        residentialAddress: updatedUser.residentialAddress,
        officeAddress: updatedUser.officeAddress,
        jobTitle: updatedUser.jobTitle,
        jobDetails: updatedUser.jobDetails,
        profilePhoto: updatedUser.profilePhoto,
        settings: updatedUser.settings,
        createdAt: updatedUser.createdAt,
        updatedAt: updatedUser.updatedAt
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update user settings
// @route   PUT /api/user/settings
export const updateUserSettings = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      if (!user.settings) {
        user.settings = {};
      }
      user.settings.baseCurrency = req.body.baseCurrency !== undefined ? req.body.baseCurrency : user.settings.baseCurrency;
      user.settings.biometricProtection = req.body.biometricProtection !== undefined ? req.body.biometricProtection : user.settings.biometricProtection;
      user.settings.neonGlow = req.body.neonGlow !== undefined ? req.body.neonGlow : user.settings.neonGlow;
      user.settings.glassmorphicIntensity = req.body.glassmorphicIntensity !== undefined ? req.body.glassmorphicIntensity : user.settings.glassmorphicIntensity;
      user.settings.defaultTaxJurisdiction = req.body.defaultTaxJurisdiction !== undefined ? req.body.defaultTaxJurisdiction : user.settings.defaultTaxJurisdiction;
      user.settings.liquidityThreshold = req.body.liquidityThreshold !== undefined ? req.body.liquidityThreshold : user.settings.liquidityThreshold;
      user.settings.defaultAnalyticsWindow = req.body.defaultAnalyticsWindow !== undefined ? req.body.defaultAnalyticsWindow : user.settings.defaultAnalyticsWindow;
      user.settings.workspaceMode = req.body.workspaceMode !== undefined ? req.body.workspaceMode : user.settings.workspaceMode;

      const updatedUser = await user.save();
      res.status(200).json(updatedUser.settings);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
