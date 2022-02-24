// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
const dbConfig = require("./db.connection.js");

require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(
  process.env.DB_NAME || dbConfig.DB, 
  process.env.DB_USER || dbConfig.USER, 
  process.env.DB_PW || dbConfig.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;