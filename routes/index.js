'use strict';
var TAG = 'ROUTES/INDEX.JS: ';
console.log(TAG, 'STARTED');
var express = require('express');
var router = express.Router();

var userRouter = require('./user');
var transactionsRouter = require('./transactions');
var itemsRouter = require('./items');
var searchRouter = require('./search');

router.get('/search', function (req, res, next)  {
	console.log(TAG)
	res.render('search');
});

router.use('/users', userRouter);
router.use('/transactions', transactionsRouter);
router.use('/fruit', itemsRouter);
router.use('/herb', itemsRouter);
router.use('/veggie', itemsRouter);
router.use('/search', searchRouter);

module.exports.router = router;
console.log(TAG, 'IS RUNNING');
