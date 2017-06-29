'use strict';
const express = require('express');
const router = express.Router();
const data_model = require('../data_model');
const Items = data_model.Items;
const Users = data_model.Users;

var TAG = 'ROUTES/ITEMS.JS: ';

router.get('/:type', function (req, res, next) {
	let title = req.params.type;
	console.log(typeof title);
	title = title.charAt(0).toUpperCase() + title.slice(1);
	Items.findAll({where: {category: req.params.type}})
	.then( items => {
		// console.log(TAG, 'GET FRUIT:', items);
		res.render('search', {items: items, title: title});
	});
});

router.get('/veggie', function (req, res, next)  {
	res.send(TAG);
});

router.get('/herb', function (req, res, next)  {
	res.send(TAG);
});

module.exports = router;
