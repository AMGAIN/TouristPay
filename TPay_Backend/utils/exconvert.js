const axios = require("axios");

const fetchExchangeRate = async (base, target) => {
  const response = await axios.get(
    "https://api.exconvert.com/latest",
    {
      headers: {
        Authorization: `Bearer ${process.env.EXCONVERT_API_KEY}`
      },
      params: { base, symbols: target }
    }
  );

  return response.data.rates[target];
};

module.exports = { fetchExchangeRate };
