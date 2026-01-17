const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// DB
connectDB();

app.get('/',(req,res)=>{
    res.send("here we start");
})

app.listen(5000,()=>{
    console.log("Port 5000 is running");
})