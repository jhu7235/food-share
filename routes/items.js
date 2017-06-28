'use strict';
const express = require('express');
const router = express.Router();
const data_model = require('../data_model').db;
const Items = require('../data_model').Items;
const Users = require('../data_model').Users;

var TAG = 'ROUTES/ITEMS.JS: ';

router.get('/', function (req, res, next) {
	console.log('Items: ', Items)
	console.log(TAG, "GET FRUIT")
	Items.findAll({where: {category: 'fruit'}})
	.then( fruits => {
		res.render('search', {items: fruits});
	});
});

router.get('/veggie', function (req, res, next)  {
	res.send(TAG);
});

router.get('/herb', function (req, res, next)  {
	res.send(TAG);
});

module.exports = router;
