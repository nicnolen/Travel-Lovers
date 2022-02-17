/* HANDLES ALL USER DATA TRANSACTIONS BETWEEN THE USER API AND THE MySQL DATABASE */
// Import the Model class and DataTypes object from Sequelize
// Model class is used to create our own models from using the extends keyword
const { Model, DataTypes } = require('sequelize');
// Import Sequelize
const sequelize = require('../config/connection');
// Import bcrypt to hash the passwords
const bcrypt = require('bcrypt');

// Create User model
class User extends model {}

// Define table columns and configuration
User.init(
  // TABLE COLUMNS
  {},

  // TABLE CONFIGURATIONS (https://sequelize.org/v5/manual/models-definition.html#configuration)
  {
    // pass in imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of the database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'user',
  }
);

// export the module
module.exports = User;
