const {Sequelize, DataTypes} = require('sequelize');
const { db } = require('../config/database');


const Airline = db.define('Airline', {
    airlineName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    iataCode: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    icaoCode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    callsign: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
})


module.exports = {Airline}