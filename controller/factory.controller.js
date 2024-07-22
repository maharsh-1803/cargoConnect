const Factory = require("../model/factory.model");

const addFactory = async(req,res)=>{
    try {
        const newFactory = new Factory({
            factoryOwnerId: req.body.factoryOwnerId,
            factoryName: req.body.factoryName,
            address: req.body.address,
            GST_no: req.body.GST_no,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
            Logo: req.file.filename,
            factoryType: req.body.factoryType,
            additionalDetails: req.body.additionalDetails,
        });        
        await newFactory.save();
        return res.status(200).json({
            success:true,
            message:"factory added successfully",
            factory:newFactory
        })
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

module.exports={
    addFactory
}