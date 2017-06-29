'use strict';
var TAG = 'SEED: ';
var db = require('./data_model').db;
const Items = require('./data_model').Items;
console.log(TAG, 'scanning...');

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
	// console.log('CREATEITEMS DB:', db);
	return Items.bulkCreate(
	[
		{category: 'fruit', name: 'bananna', price: 2,
		imageUrl: 'http://i.ndtvimg.com/i/2016-11/banana_620x350_61478592730.jpg'},
		{category: 'fruit', name: 'appple', price: 2,
		imageUrl: 'http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/09/Polish-apple-exports.jpg'},
		{category: 'fruit', name: 'strawberry', price: 2,
		imageUrl: 'http://www.peddlersvillage.com/public_docs/events/strawberry-festival.jpg'},
		{category: 'vegetable', name: 'potato', price: 2,
		imageUrl: 'http://blog.oxforddictionaries.com/wp-content/uploads/potato.jpg'},
		{category: 'vegetable', name: 'carrot', price: 1,
		imageUrl: 'http://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/carrots.jpg?itok=_nIMWR5y'},
		{category: 'vegetable', name: 'cucumber', price: 1,
		imageUrl: 'http://www.rareseeds.com/assets/1/14/DimLarge/Cucumber-Boston-Pickling.jpg'},
		{category: 'vegetable', name: 'squash', price: 2,
		imageUrl: 'http://demandware.edgesuite.net/sits_pod38/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dwe2e8424e/Images/Product%20Images/prod002714/prod002714.jpg?sw=265&sh=312&sm=fit'},
		{category: 'vegetable', name: 'zucchini', price: 2,
		imageUrl: 'http://www.vegkitchen.com/wp-content/uploads/2011/07/Sliced-Zucchini.jpg'},
		{category: 'vegetable', name: 'spinach', price: 2,
		imageUrl: 'http://www.fresh-square.com/wp-content/uploads/2016/10/spinach-web.jpg'},
		{category: 'vegetable', name: 'kale', price: 2,
		imageUrl: 'https://cdn.authoritynutrition.com/wp-content/uploads/2014/10/fresh-kale-on-a-wooden-table.jpg'},
		{category: 'vegetable', name: 'beets', price: 2,
		imageUrl: 'http://img.webmd.boots.com/dtmcms/live/webmd_uk/consumer_assets/site_images/2014_misc/medref_beetroot.jpg'},
		{category: 'fruit', name: 'avocado', price: 3,
		imageUrl: 'http://www.well-beingsecrets.com/wp-content/uploads/avocado-halved-health-benefits-800x416.jpg'},
	])
	// .then( () => { return Items.findAll();})
	// .then( items => { console.log(items);})
	.catch( err => console.log('ERROR', err));
};
var seed = function() {
	console.log(TAG, 'STARTED');
	// createPopulation();
	// createTransactions();
	createItems()
	.then( () => {
		db.sync();
		console.log(TAG, 'DB-SYNCED');
	});
	console.log(TAG, 'FINISHED');
};


module.exports = seed;
console.log(TAG, 'scanned');
