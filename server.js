// const {Sequelize} = require('sequelize')
require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./config/database');
const airlineRoutes = require('./routes/airlineRoutes');


async function connect(){
     await db.db.authenticate();
     if (!db.db.authenticate){
        console.log(`Unable to connect to MySQL database`)
     }else{
        console.log(`Connected to MySQL database - ${process.env.DB_NAME}`)
     }
}

app.use(express.json())
app.use('/api', airlineRoutes)
app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
})

connect()
