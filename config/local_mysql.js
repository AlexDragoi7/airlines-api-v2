const mysql = require('mysql2')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()

app.use(bodyParser.json())

const local_db = mysql.createConnection({
    host:'localhost',
    user: 'larex',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

function testConnection(){
    if (local_db){
        console.log(`Connected to ${process.env.DB_NAME} - for create/drop table`);
    }else{
        console.error(`Error connecting to database`);
    }
}

function createTable(){
    if (local_db){
        local_db.query(`CREATE TABLE IF NOT EXISTS ${process.env.DB_TABLE} (ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT, airline_name VARCHAR(100), local_language_airline_name VARCHAR(100),iata_code VARCHAR(5), icao_code VARCHAR(5), callsign VARCHAR(100),commenced_ops INT NOT NULL, country VARCHAR(100), region VARCHAR(30), flag VARCHAR(10), headquarters VARCHAR(100), notes VARCHAR(200));`);
        console.log(`Table ${process.env.DB_TABLE} was successfully created`);
    }else{
        console.error(`Could not create ${process.env.DB_TABLE} table`);
    }
}

function dropTable(){
    if (local_db){
        local_db.query(`DROP TABLE ${process.env.DB_TABLE};`)
        console.log(`Table ${process.env.DB_TABLE} was successfully deleted`);
    }else{
        console.error(`Table was not found - could not be deleted`);
    }
}


module.exports = {testConnection, createTable, dropTable}