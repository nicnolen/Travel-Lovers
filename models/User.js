/* HANDLES ALL USER DATA TRANSACTIONS BETWEEN THE USER API AND THE MySQL DATABASE */
// Import the Model class and DataTypes object from Sequelize
// Model class is used to create our own models from using the extends keyword
const { Model, DataTypes } = require('sequelize');
// Import Sequelize
const sequelize = require('../config/connection');
// Import bcrypt to hash the passwords
const bcrypt = require('bcrypt');

// Create User model
class User extends Model {
  // instance method that compares plaintext password with hashed password
  checkPassword(loginPw) {
    return bcrypt.compare(loginPw, this.password);
  }
}

// Define table columns and configuration
User.init(
  // TABLE COLUMNS AND DATATYPES
  {
    // id column
    id: {
      type: DataTypes.INTEGER, // use the Sequelize DataTypes object to provide what kind of data it is
      allowNull: false, // this column cannot be null (equivalent to SQL's `NOT NULL` option)
      primaryKey: true, // set this column as the Primary Key
      autoIncrement: true, // turn on auto increment
    },
    // username column
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // there cannot be any duplicate email values in this table
      validate: {
        isEmail: true,
      }, // if allowNull is set to false, we can run our data through validators before creating the table data
    },
    // password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4], // password must be at least 4 characters long
      },
    },
  },

  // TABLE CONFIGURATIONS (https://sequelize.org/v5/manual/models-definition.html#configuration)
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      }, // pass in hooks to hash a password just before a user is created
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      }, // pass in a hook before the user is updated
    },
    sequelize, // pass in imported sequelize connection (the direct connection to our database)
    timestamps: false, // don't automatically create createAt/updatedAt timestamp fields
    freezeTableName: true, // don't pluralize name of the database table
    underscored: true, // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    modelName: 'user', // make it so our model name stays lowercase in the database
  }
);

// export the module
module.exports = User;
