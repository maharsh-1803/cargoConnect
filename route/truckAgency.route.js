const { addAgency, loginAgencyOwner, getAgencyById } = require('../controller/truckAgency.controller');
const upload = require('../middleware/multer.middleware');

const router = require('express').Router();

router.post('/addAgency',upload.single('Logo'),addAgency);
router.post('/loginAgency',loginAgencyOwner);   
router.get('/getAgencyById/:id',getAgencyById)

module.exports=router;