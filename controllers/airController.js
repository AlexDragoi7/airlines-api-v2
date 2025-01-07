const airlineModel = require('../models/airlines');

exports.getAllAirlines = async(req, res) =>{
    const airlines = await airlineModel.Airline.findAll();
    airlines ? res.status(200).json(airlines) : res.status(500).send(`Internal server error`);
}


exports.createAirline = async(req, res) => {
    const {airlineName, iataCode, icaoCode, callsign, country} = req.body;
    const newAirline = await airlineModel.Airline.create({
        airlineName, iataCode, icaoCode, callsign, country
    })

    newAirline ? res.status(201).json(newAirline) : res.status(404).send(`Error - could not create a new entry`);
}

exports.deleteAllAirlines = async (req, res) => {
    await airlineModel.Airline.truncate();
    res.send("All entries were succesfully deleted!");
}

