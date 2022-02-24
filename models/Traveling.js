const { Sequelize, Model, DataTypes } = require('sequelize');
const { Traveling } = require('.');
const sequelize = require('../config/connection');

class Traveling extends Model { }

Traveling.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Traveling;