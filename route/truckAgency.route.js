const { addAgency, loginAgencyOwner } = require('../controller/truckAgency.controller');
const upload = require('../middleware/multer.middleware');

const router = require('express').Router();

router.post('/addAgency',upload.single('Logo'),addAgency);
router.post('/loginAgency',loginAgencyOwner);   

module.exports=router;