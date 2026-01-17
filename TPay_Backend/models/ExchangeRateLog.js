const mongoose = require("mongoose");

const exchangeRateLogSchema = new mongoose.Schema({
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
}
});

// Index for fast historical queries
exchangeRateLogSchema.index(
    { baseCurrency: 1, targetCurrency: 1, fetchedAt: -1 }
);

export const ExchangeRateLog = mongoose.model("ExchangeRateLog", exchangeRateLogSchema);
