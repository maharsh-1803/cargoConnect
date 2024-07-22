const jwt = require('jsonwebtoken'); 
const dotenv =require('dotenv');
dotenv.config();
const secretKey = process.env.SECRET_KEY;

const generateToken = async({_id})=>{
    try {
        const paylaod = {_id};
        const token = jwt.sign(paylaod,secretKey,{expiresIn:'365d'});
        return {token}
    } catch (error) {
        console.log("error in token generation",error);
        throw new Error('Token generation failed');
    }
}

module.exports=generateToken;