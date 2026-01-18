const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const exchangeRateRoutes = require('./routes/exchangeRate.routes');
const walletRoutes = require('./routes/wallet.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// DB
connectDB();

app.get('/',(req,res)=>{
    res.send("here we start");
})


app.use("/api/exchange-rate", exchangeRateRoutes);
app.use("/api/wallet", walletRoutes);

app.listen(5000,()=>{
    console.log("Port 5000 is running");
})