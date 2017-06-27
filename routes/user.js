'use strict';
var TAG = 'ROUTES/USER.JS: ';
console.log(TAG, 'started');
var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next)  {
	res.send(TAG);
});
module.exports = router;
