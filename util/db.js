const Sequelize = require('sequelize');

const sequelize = new Sequelize('cricket_db', 'root', 'root123', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;