const { ExchangeRate } = require("../models/ExchangeRate");
const { ExchangeRateLog } = require("../models/ExchangeRateLog");
const { fetchExchangeRate } = require("../utils/exconvert");

const getExchangeRate = async (req, res) => {
  try {
    const { from, to } = req.query;

    if (!from || !to) {
      return res.status(400).json({ message: "from and to are required" });
    }

    let rateDoc = await ExchangeRate.findOne({
      baseCurrency: from,
      targetCurrency: to
    });

    if (rateDoc) {
      return res.json({
        from,
        to,
        rate: rateDoc.rate.toString(),
        cached: true
      });
    }

    const rate = await fetchExchangeRate(from, to);

    const now = new Date();
    const expiresAt = new Date(now.getTime() + 10 * 60 * 1000);

    rateDoc = await ExchangeRate.findOneAndUpdate(
      { baseCurrency: from, targetCurrency: to },
      { rate, fetchedAt: now, expiresAt },
      { upsert: true, new: true }
    );

    await ExchangeRateLog.create({
      baseCurrency: from,
      targetCurrency: to,
      rate,
      fetchedAt: now
    });

    res.json({
      from,
      to,
      rate: rate.toString(),
      cached: false
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Exchange service unavailable" });
  }
};

module.exports = { getExchangeRate };
