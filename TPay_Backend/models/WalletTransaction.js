const mongoose = require("mongoose");

const walletTransactionSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    required: true, 
    ref: "User" 
},
  amount: { 
    type: mongoose.Types.Decimal128, 
    required: true 
},      // Amount in base currency
  baseCurrency: { 
    type: String, 
    required: true, 
    uppercase: true, 
    trim: true 
},
  targetCurrency: { 
    type: String, 
    required: true, 
    uppercase: true, 
    trim: true 
},
  exchangeRate: { 
    type: mongoose.Types.Decimal128, 
    required: true 
},  // Rate used
  convertedAmount: { 
    type: mongoose.Types.Decimal128, 
    required: true 
}, // Final amount in target currency
  type: { 
    type: String, 
    enum: ["TRANSFER", "TOPUP", "WITHDRAW"], 
    default: "TRANSFER" 
},
  status: { 
    type: String, 
    enum: ["PENDING", "SUCCESS", "FAILED"], 
    default: "PENDING" 
},
  createdAt: { 
    type: Date, 
    default: Date.now 
}
});

// Index for querying user transactions quickly
walletTransactionSchema.index({ userId: 1, createdAt: -1 });

module.exports.WalletTransaction = mongoose.model("WalletTransaction", walletTransactionSchema);