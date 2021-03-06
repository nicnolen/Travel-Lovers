const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the places model
class Place extends Model {}

// create fields for the places model
Place.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        city: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true, // model tablename will be the same as model name
        underscored: true,
        modelName: 'place'
    }
);

module.exports = Place;