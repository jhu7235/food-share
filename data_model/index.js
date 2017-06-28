'use strict';
var TAG = 'DATA_MODEL/INDEX.JS: ';
console.log(TAG, 'STARTED');
const Sequelize = require('sequelize');
var db = new Sequelize(
    'postgres://localhost:5432/foodshare',
    {logging: false});


var Users = db.define('user', {
	userType: {
		type: Sequelize.ENUM('seller', 'buyer', 'admin', 'developer'),
		defaultValue: 'buyer'
	},
	firstname: { type: Sequelize.STRING },
	lastname: {
		type: Sequelize.STRING
	}
}, {});


var Transactions = db.define('transactions', {
	total: {
		type: Sequelize.FLOAT,
		notNull: true
	},
	date: {type: Sequelize.DATE}
});

var Items = db.define('items', {
	category: {
		type: Sequelize.ENUM('fruit', 'veggie', 'herb'),
	},
	name: { type: Sequelize.STRING },
	price: { type: Sequelize.INTEGER },
	imageUrl: { type: Sequelize.STRING}
});


Users.belongsTo(Transactions, {as: 'buyer'});
Users.belongsTo(Transactions, {as: 'seller' });
Users.belongsTo(Items, {as: 'grower'});

module.exports.db = db;
module.exports.Items = Items;
module.exports.Transactions = Transactions;
module.exports.Users = Users;
console.log(TAG, 'IS RUNNING');
