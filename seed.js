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
	[
		{name: bananna, price: 2},
		{name: appple, price: 2},
		{name: strawberry, price: 2},
		{name: potato, price: 2},
		{name: carrot, price: 1},
		{name: cucumber, price: 1},
		{name: squash, price: 2},
		{name: zucchini, price: 2},
		{name: spinach, price: 2},
		{name: kale, price: 2},
		{name: beets, price: 2},
		{name: avocado, price: 3}
	]
	);
};
var seed = function() {
	createPopulation();
	createTransactions();

};


module.exports = seed;
console.log(TAG, 'FINISHED');
