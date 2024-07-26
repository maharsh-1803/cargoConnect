const mongoose =require('mongoose');

function getISTTime() {
    const istOffset = 5.5 * 60 *60 * 1000; // IST is UTC +5:30
    const now = new Date();
    const istTime = new Date(now.getTime() + istOffset);
    return istTime;
  }

const truckAgencySchema = new mongoose.Schema({
    agencyName:{
        type:String,
        required:true
    },
    agencyOwnerName:{
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
},{
    timestamps: {
      currentTime: () => getISTTime() 
    }
})

const truckAgency = mongoose.model('truchAgency',truckAgencySchema);
module.exports=truckAgency;