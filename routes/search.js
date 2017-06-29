'use strict';
var TAG = 'ROUTES/SEARCH.JS: ';
console.log(TAG, 'scanned');
var express = require('express');
var router = express.Router();
const Items = require('../data_model').Items;

// router.get('/', function (req, res, next) {
// 	res.send(TAG);
// });

router.get('/', function (req, res, next)  {
	// console.log(TAG, 'GET');
	Items.findAll()
	.then( items => {
		// console.log(TAG, items);
		res.render('search', items);
	});
});

module.exports = router;
