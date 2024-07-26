const generateToken = require("../middleware/generateToken");
const truckAgency = require("../model/truckAgency.model");

const addAgency = async (req, res) => {
    try {
        const {agencyName,contactPersonNum,agencyOwnerName,GST_no,country,state,city,noOfTrucks,email,password,address,additionalDetails} = req.body;
        const Logo = req.file ? req.file.filename : null;
        const newAgency = new truckAgency({
            agencyName,
            contactPersonNum,
            agencyOwnerName,
            GST_no,
            country,
            state,
            city,
            noOfTrucks,
            email,
            password,
            address,
            additionalDetails,
            Logo
        })

        await newAgency.save();
        newAgency.password=undefined
        return res.status(200).json({
            success:true,
            message:"agency registered successfully",
            Agency:newAgency
        })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const loginAgencyOwner = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const agency = await truckAgency.findOne({email:email});
        if(!agency){
            return res.status(404).send({message:"Invalid email or password"});
        }
        const token = await generateToken({_id:agency._id})
        if(password === agency.password){
            return res.status(200).json({
                success:true,
                message:"login successfully",
                agencyOwnerName:agency.agencyOwnerName,
                token:token.token
            })
        }
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const getAgencyById = async(req,res)=>{
    try {
        const {id} = req.params;
        const agency = await truckAgency.findById(id);
        if(!agency){
            return res.status(404).send({message:"agency not found"})
        }
        return res.status(200).json({
            success:true,
            message:"agency retrived successfully",
            agency:agency
        })
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

module.exports={
    addAgency,
    loginAgencyOwner,
    getAgencyById
}