const {Sequelize, DataTypes} = require('sequelize');
const { db } = require('../config/database');


const airline = db.define('airline', {
    airline_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    iata_code: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    icao_code: {
        type: DataTypes.STRING,
        allowNull: true
    },
    callsign: {
        type: DataTypes.STRING,
        allowNull: false
    },
    commenced_ops: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    region: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    flag: {
        type: DataTypes.STRING,
        allowNull: false
    },
    headquarters: {
        type: DataTypes.STRING,
        allowNull: true
    },
    notes:{
        type: DataTypes.STRING,
        allowNull: true
    }

})


module.exports = {airline}