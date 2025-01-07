const {Sequelize} = require('sequelize');
require('dotenv').config()


const db = new Sequelize(`${process.env.DB_NAME}`, 'larex', `${process.env.DB_PASSWORD}`, {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

module.exports = {db}