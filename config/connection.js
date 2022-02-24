// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
const dbConnection = require("./db.connection.js");

require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(
  process.env.DB_NAME || dbConnection.DB, 
  process.env.DB_USER || dbConnection.USER, 
  process.env.DB_PW || dbConnection.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;