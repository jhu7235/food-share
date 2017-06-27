'use strict';
/*  ----   express  ----   */
const TAG = 'APP.JS: ';
console.log(TAG, 'STARTED');
const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const router = require('./routes').router;
/*  ----   routing  ----   */
const db = require('./data_model').db;
const portNum = 1871;

app.use('/', router);


app.listen(portNum, function () {
	db.sync();
	console.log(TAG, 'db sync-ed');
	console.log(TAG, 'port ' + portNum + ' is open');
});

console.log(TAG, 'IS RUNNING');
