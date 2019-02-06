var express = require('express');
var router = express.Router();
var router_handlers = require('../handlers/route_handlers.js');

router.get('/', router_handlers.landingPage);
router.post('/', router_handlers.landingPagePost);
router.post('/home', router_handlers.home);

module.exports = router;