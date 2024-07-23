const express = require('express');
const mongoose = require('mongoose')
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const bodyParser = require('body-parser');
const cors = require('cors')
const factoryOwnerRoute = require('./route/factoryOwner.route')
const factoryRoute = require('./route/factory.route')


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


app.use(bodyParser.json());
app.use(cors());

app.use('/api/factoryOwner',factoryOwnerRoute);
app.use('/api/factory',factoryRoute);