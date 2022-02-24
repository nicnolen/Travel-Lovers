const { Sequelize, Model, DataTypes } = require('sequelize');
const { Lifestyle } = require('.');
const sequelize = require('../config/connection');

class Lifestyle extends Model { }

Lifestyle.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    },
    {
        sequelize
    }
);

module.exports = Lifestyle;