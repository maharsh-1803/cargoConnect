const { addAgency, loginAgencyOwner, getAgencyById } = require('../controller/truckAgency.controller');
const AuthToken = require('../middleware/authToken');
const upload = require('../middleware/multer.middleware');

const router = require('express').Router();

router.post('/addAgency',upload.single('Logo'),addAgency);
router.post('/loginAgency',loginAgencyOwner);   
router.get('/getAgencyById/:id',AuthToken,getAgencyById)

module.exports=router;