const generateToken = require("../middleware/generateToken");
const factoryOwner = require("../model/factoryOwner.model")

const addFactoryOwner = async (req, res) => {
    try {
        const newOwner = new factoryOwner({
            name: req.body.name,
            phoneNo: req.body.phoneNo,
            email: req.body.email,
            password: req.body.password,
            country: req.body.country,
            state: req.body.state,
            city: req.body.city,
        });

        await newOwner.save();
        newOwner.password=undefined
        return res.status(200).json({
            success: true,
            message: "Factory owner registered successfully",
            owner: newOwner
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const factoryOwnerLogin = async(req,res)=>{
    try {
        const {email,password}= req.body;
        const owner = await factoryOwner.findOne({email:email});
        if(!owner){
            return res.status(400).send({message:"invalid credantails"})
        }
        const token = await generateToken({_id:owner._id});
        console.log(token)
        if(password===owner.password){
            return res.status(200).json({
                success:true,
                message:"owner login successfully",
                token:token.token
            })
        }
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}


module.exports={
    addFactoryOwner,
    factoryOwnerLogin
}