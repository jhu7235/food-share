'use strict';
var TAG = 'SEED: ';
var db = require('./data_model');
console.log(TAG, 'STARTED');

var seed = function() {
	for (var i = populationSize.length - 1; i >= 0; i--) {
		db.User.create({
			userType: 'farmer',
			firstname: 'Farmer Joe',
			lastname: i.toString()
		});
		db.Transaction.create({
			total: 2.99
		});
		// populationSize[i])
	}

};
module.exports = seed;
console.log(TAG, 'FINISHED');
