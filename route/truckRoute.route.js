const { addRoute, getRoutesByAgencyId } = require('../controller/truckRoute.controller');
const AuthToken = require('../middleware/authToken');

const router = require('express').Router();

router.post('/addRoute',AuthToken,addRoute)
router.get('/getRoutesByAgencyId/:id',getRoutesByAgencyId)

module.exports=router;