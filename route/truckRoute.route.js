const { addRoute } = require('../controller/truckRoute.controller');
const AuthToken = require('../middleware/authToken');

const router = require('express').Router();

router.post('/addRoute',AuthToken,addRoute)

module.exports=router;