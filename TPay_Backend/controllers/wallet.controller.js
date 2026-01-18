const { ExchangeRate } = require("../models/ExchangeRate");
const { WalletTransaction } = require("../models/WalletTransaction");

const transferMoney = async (req, res) => {
  try {
    const { userId, amount, fromCurrency, toCurrency } = req.body;

    if (!userId || !amount || !fromCurrency || !toCurrency) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const rateDoc = await ExchangeRate.findOne({
      baseCurrency: fromCurrency,
      targetCurrency: toCurrency
    });

    if (!rateDoc) {
      return res.status(503).json({ message: "Exchange rate not available" });
    }

    const exchangeRate = Number(rateDoc.rate.toString());
    const convertedAmount = Number(amount) * exchangeRate;

    const transaction = await WalletTransaction.create({
      userId,
      amount,
      baseCurrency: fromCurrency,
      targetCurrency: toCurrency,
      exchangeRate,
      convertedAmount,
      status: "SUCCESS"
    });

    res.status(201).json({
      message: "Transfer successful",
      transaction
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Transaction failed" });
  }
};

module.exports = { transferMoney };
