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

router.use('/', itemsRouter);
router.use('/users', userRouter);
router.use('/transactions', transactionsRouter);
router.use('/search', searchRouter);

module.exports.router = router;
console.log(TAG, 'IS RUNNING');
