const mongoose = require("mongoose");
const exchangeRateSchema = new mongoose.Schema({
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
  rate: { 
    type: mongoose.Types.Decimal128,
     required: true 
    },
  source: { 
    type: String, 
    default: "EXCONVERT" 
},
  fetchedAt: { 
    type: Date, 
    required: true 
},
  expiresAt: { 
    type: Date, 
    required: true 
}
});

// Unique pair
exchangeRateSchema.index(
    { baseCurrency: 1, targetCurrency: 1 },
     { unique: true }
    );

// Optional: TTL index for auto-expiry
exchangeRateSchema.index(
    { expiresAt: 1 }, 
    { expireAfterSeconds: 0 }
);

module.exports.ExchangeRate = mongoose.model("ExchangeRate", exchangeRateSchema);