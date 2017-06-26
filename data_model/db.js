const Sequelize = require('sequelize');
var db = new Sequelize(
    'postgres://localhost:5432/wikistack',
    {logging: false});

//need table for users

var Growers, Vegatables;

var Users = db.define('user', {
	security: {
		type: Sequelize.ENUM('seller', 'buyer', 'admin', 'developer'),
		defaultValue: 'consumer'
	},
	name: {
		type: Sequelize.STRING

	},


}, {

});

var Transactions = db.define('transactions', {
	total: {type: Sequelize.INTEGER},
	date: {type: Sequelize.DATE}
})

var Items = db.define('items', {

})

Users.belongsTo('Transaction', {as: 'buyer'});
Users.belongsTo('Transaction', {as: 'seller' });
