var express = require('express');
var router = express.Router();

var registerController = require('../controllers/registerController')
router.post('/register', registerController.store);
router.post('/', registerController.index);
module.exports = router;