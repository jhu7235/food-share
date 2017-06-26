const Sequelize = require('sequelize');
var db = new Sequelize(
    'postgres://localhost:5432/wikistack',
    {logging: false});

//need table for users

var Growers, Users, Vegatables