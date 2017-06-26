const express = require('express');
	const app = express();
const nunjucks = require('nunjucks');
const bodyParse = require('body-parser');
const dataModels = require('./data_models');
const routes = require('./routes');

const TAG = 'app.js: ';
const portNum = 1871;


app.listen(portNum, function () {
	console.log(TAG, 'port ' + portNum + ' is open');
});

