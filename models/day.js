const Sequelize = require('sequelize');
const dbConnection = require('./_db');

const Day = dbConnection.define('day', {});

module.exports = Day;
