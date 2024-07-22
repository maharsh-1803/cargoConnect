const { addFactoryOwner, factoryOwnerLogin } = require('../controller/factoryOwner.controller');
const upload = require('../middleware/multer.middleware');

const router = require('express').Router();

router.post('/addFactoryOwner',addFactoryOwner);
router.post('/ownerLogin',factoryOwnerLogin);

module.exports=router;  