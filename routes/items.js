'use strict';
var express = require('express');
var router = express.Router();
var TAG = 'ROUTES/ITEMS.JS: ';

router.get('/', function (req, res, next)  {
	res.send(TAG);
});

module.exports = router;
