const mongoose = require('mongoose');

const factorySchema = new mongoose.Schema({
    factoryName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    GST_no:{
        type:String
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
    Logo:{
        type:String
    },
    factoryType:{
        type:String,
        required:true
    },
    additionalDetails:{
        type:String
    },
    status:{
        type:String,
        enum:["inactive","active"],
        default:"active"
    }

})

const factoryOwnerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
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
    factories:[factorySchema],
    status:{
        type:String,
        enum:["active","inactive"]
    }
})

const factoryOwner = mongoose.model('factoryOwner',factoryOwnerSchema);

module.exports=factoryOwner;