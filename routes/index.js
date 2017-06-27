'use strict';
var TAG = 'ROUTES/INDEX.JS: ';
console.log(TAG, 'STARTED');
var express = require('express');
var router = express.Router();

var userRouter = require('./user');
var transactionsRouter = require('./transactions');
var itemsRouter = require('./items');

router.use('/users', userRouter);
router.use('/transactions', transactionsRouter);
router.use('/items', itemsRouter);

module.exports.router = router;
console.log(TAG, 'IS RUNNING');
