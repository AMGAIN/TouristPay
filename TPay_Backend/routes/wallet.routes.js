const express = require("express");
const { transferMoney } = require("../controllers/wallet.controller");

const router = express.Router();

router.post("/transfer", transferMoney);

module.exports = router;
