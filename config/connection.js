// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// assign sequelize to a let variable
let sequelize;

// If application has access to Heroku's JawsDB then use it
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // otherwise use our local database
  // Create connection to our database, pass in your MySQL information for username and password
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost', // Host is the system that contains the data. localhost means that the data is on your local computer
      dialect: 'mysql', // Telling us what sql dialect we are using
      port: 3306, // Port of the relational database
    }
  );
}

module.exports = sequelize;
