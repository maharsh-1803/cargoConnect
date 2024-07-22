const express = require('express');
const mongoose = require('mongoose')
const app = express();
const dotenv = require('dotenv')
dotenv.config();

const connectToMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}

app.listen(process.env.PORT,()=>{
    connectToMongoDB();
    console.log("server is running on 5000")
})