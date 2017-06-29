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
const portNum = 3000;
const path = require('path');
const morgan = require('morgan');
var env = nunjucks.configure('views', {noCache: true});
app.use(morgan('dev'));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
// const AutoEscapeExtension = require('nunjucks-autoescape')(nunjucks);
// env.addExtension('AutoEscapeExtension', new AutoEscapeExtension(env));

app.get('/search', function (req, res, next)  {
	console.log(TAG);
	res.render('search');
});

app.use('/', router);

app.get('/', function (req, res, next) {
	res.render('index');
});

app.use(express.static(path.join(__dirname, '/public')));
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.listen(portNum, function () {
	db.sync({force: true})
	.then( () => {
		console.log(TAG, 'DB-CLEARED');
		seed();
	})
	.catch(console.error.bind(console));
	console.log(TAG, 'port ' + portNum + ' is open');
});

console.log(TAG, 'IS RUNNING');
