'use strict';
var TAG = 'SEED: ';
var db = require('./data_model');
console.log(TAG, 'STARTED');

const population = [];

const createPopulation = function () {
	for (var i = population.length - 1; i >= 0; i--) {
		db.User.create({
			userType: 'farmer',
			firstname: 'Farmer Joe',
			lastname: i.toString()
		});
	}
};

const createTransactions = function () {
	for (var i = population.length - 1; i >= 0; i--) {
		db.Transaction.create({
			total: 1.00 + i / 100,
		});
	}
};

const createItems = function() {
	db.Items.bulkCreate(
	{}
	);
};
var seed = function() {
	createPopulation();
	createTransactions();

};


module.exports = seed;
console.log(TAG, 'FINISHED');
