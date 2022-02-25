// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
const dbConnection = require("./db.connection.js");

require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize(
  "heroku_c56645ec48a49c9", 
  "bbfb9e375921eb", 
  "6076cf4f", {
  host: "us-cdbr-east-05.cleardb.net",
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;