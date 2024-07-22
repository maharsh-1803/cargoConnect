const { addFactory } = require('../controller/factory.controller');
const upload = require('../middleware/multer.middleware');

const router = require('express').Router();

router.post('/addFactory',upload.single('Logo'),addFactory);

module.exports=router;