const airlineModel = require('../models/airlines');

exports.getAllAirlines = async(req, res) =>{
    const airlines = await airlineModel.airline.findAll();
    airlines ? res.status(200).json(airlines) : res.status(500).send(`Internal server error`);
}

exports.createAirline = async(req, res) => {
    const {airline_name, local_language_airline_name, iata_code, icao_code, callsign, commenced_ops
        ,country, region, flag, headquarters, notes
     } = req.body;
    const newAirline = await airlineModel.airline.create({
        airline_name, local_language_airline_name, iata_code, icao_code, callsign, commenced_ops, country, region, flag, headquarters, notes
    });

    newAirline ? res.status(201).json(newAirline) : res.status(404).send(`Error - could not create a new entry`);
}

exports.deleteAllAirlines = async (req, res) => {
    await airlineModel.airline.truncate();
    res.send("All entries were succesfully deleted!");
}

