'use strict';
/*  ----   express  ----   */
const TAG = 'APP.JS: ';
console.log(TAG, 'STARTED');
const express = require('express');
const app = express();
// const bodyParse = require('body-parser');
const router = require('./routes').router;
const nunjucks = require('nunjucks');
/*  ----   routing  ----   */
const db = require('./data_model').db;
const seed = require('./seed');
const portNum = 1871;
const path = require('path');
const morgan = require('morgan');
var env = nunjucks.configure('views', {noCache: true});
app.use(morgan('dev'));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
// const AutoEscapeExtension = require('nunjucks-autoescape')(nunjucks);
// env.addExtension('AutoEscapeExtension', new AutoEscapeExtension(env));

seed();

app.use('/', router);

app.get('/', function (req, res, next) {
	res.render('index');
});

app.use(express.static(path.join(__dirname, '/public')));

app.listen(portNum, function () {
	db.sync();
	console.log(TAG, 'db sync-ed');
	console.log(TAG, 'port ' + portNum + ' is open');
});

console.log(TAG, 'IS RUNNING');
