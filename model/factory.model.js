const mongoose = require('mongoose');
function getISTTime() {
    const istOffset = 5.5 * 60 *60 * 1000; // IST is UTC +5:30
    const now = new Date();
    const istTime = new Date(now.getTime() + istOffset);
    return istTime;
  }
 
const factorySchema = new mongoose.Schema({
    factoryOwnerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'factoryOwner',
        reqiured:true
    },
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

},  {
    timestamps: {
      currentTime: () => getISTTime() 
    }
})

const Factory = mongoose.model('Factory',factorySchema);

module.exports=Factory;