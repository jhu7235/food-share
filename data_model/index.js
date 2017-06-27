const Sequelize = require('sequelize');
var db = new Sequelize(
    'postgres://localhost:5432/foodshare',
    {logging: false});

//need table for users


var Users = db.define('user', {
	security: {
		type: Sequelize.ENUM('seller', 'buyer', 'admin', 'developer'),
		defaultValue: 'consumer'
	},
	firstname: { type: Sequelize.STRING },
	lastname: {
		type: Sequelize.STRING
	}
}, {

});

var Transactions = db.define('transactions', {
	total: {
		type: Sequelize.INTEGER,
		notNull: true
	},
	date: {type: Sequelize.DATE}
});

var Items = db.define('items', {
	name: { type: Sequelize.STRING },
	price: { type: Sequelize.INTEGER }
});

Users.belongsTo('Transactions', {as: 'buyer'});
Users.belongsTo('Transactions', {as: 'seller' });
Users.belongsTo('Transcations', {as: 'grower'});

module.exports.db = db;
