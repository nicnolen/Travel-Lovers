const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the places model
class Places extends Model {}

// create fields for the places model
Places.init(
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
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true, // model tablename will be the same as model name
        underscored: true,
        modelName: 'places'
    }
);

module.exports = Places;