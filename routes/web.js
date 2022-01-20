var express = require('express');
var router = express.Router();

var aboutcontroller=require('../controllers/aboutController')
router.get('/',aboutcontroller.index);
module.exports = router;