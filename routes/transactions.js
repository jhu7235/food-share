'use strict';
var TAG = 'ROUTES/TRANSACTIONS.JS: ';
console.log(TAG, 'STARTED');

var express = require('express');
var router = express.Router();

// router.get('/', function (req, res, next)  {
// 	res.send(TAG);
// });
router.get('/', function (req, res, next)  {
	res.send(TAG);
});

module.exports = router;
console.log(TAG, 'IS RUNNING');

