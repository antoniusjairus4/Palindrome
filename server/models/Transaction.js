import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema(
  {
    userId: { // ◄— Standardized to match your transactionController query fields!
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: [true, 'Please add a transaction description title'],
    },
    amount: {
      type: Number,
      required: [true, 'Please add a transaction amount'],
    },
    category: {
      type: String,
      required: [true, 'Please select a tracking category portfolio classification'],
    },
    type: {
      type: String,
      enum: ['income', 'expense'],
      required: [true, 'Please specify if entry type is income or expense'],
    },
    notes: {
      type: String,
      trim: true,
      default: ''
    },
    date: {
      type: Date,
      default: Date.now
    },
    hasReceipt: {
      type: Boolean,
      default: false
    },
    receiptImage: {
      type: String
    },
    hasImageProof: {
      type: Boolean,
      default: false
    },
    proofImage: {
      type: String
    },
    extractedText: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Transaction', TransactionSchema);