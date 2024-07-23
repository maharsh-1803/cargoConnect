const mongoose =require('mongoose');

const truckAgencySchema = new mongoose.Schema({
    agencyName:{
        type:String,
        required:true
    },
    contactPersonNum:{
        type:Number,
        required:true
    },
    GST_no:{
        type:String,
    },
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    noOfTrucks:{
        type:Number,
        required:true
    },
    routes:{
        type:[String],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    Logo:{
        type:String,
    },
    additionalDetails:{
        type:String
    }
})

const truckAgency = mongoose.model('truchAgency',truckAgencySchema);
module.exports=truckAgency;