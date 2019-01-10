var express = require('express');
var router = express.Router();
var router_handlers = require('../handlers/route_handlers.js');

router.post('/', router_handlers.landingPage);
router.get('/home', router_handlers.home);

module.exports = router;