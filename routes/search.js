'use strict';
var TAG = 'ROUTES/SEARCH.JS: ';
console.log(TAG, 'started');
var express = require('express');
var router = express.Router();

// router.get('/', function (req, res, next) {
// 	res.send(TAG);
// });

router.get('/', function (req, res, next)  {
	console.log(TAG)
	res.render('search');
});

module.exports = router;
 