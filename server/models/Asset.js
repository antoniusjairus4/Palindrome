import mongoose from 'mongoose';

const AssetSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    assetTicker: {
      type: String,
      trim: true,
      uppercase: true,
    },
    assetName: {
      type: String,
      required: [true, 'Please add an asset name'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Please add a quantity'],
      min: [0, 'Quantity cannot be negative'],
    },
    assetClass: {
      type: String,
      required: [true, 'Please specify the asset class classification'],
      enum: ['Equity', 'Crypto', 'Commodity', 'Real Estate', 'Precious Metals', 'Vehicle', 'Custom'],
    },
    valuationMode: {
      type: String,
      required: [true, 'Please specify a valuation mode'],
      enum: ['Live', 'Manual'],
      default: 'Live',
    },
    manualValue: {
      type: Number,
      validate: {
        validator: function(value) {
          if (this.valuationMode === 'Manual') {
            return typeof value === 'number' && value >= 0;
          }
          return true;
        },
        message: 'Manual value is required and must be non-negative if valuationMode is Manual'
      }
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Asset', AssetSchema);
