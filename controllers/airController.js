const airlineModel = require('../models/airlines');

exports.getAllAirlines = async(req, res) =>{
    const airlines = await airlineModel.airline.findAll();
    airlines ? res.status(200).json(airlines) : res.status(500).send(`Internal server error`);
}

exports.getAirlinesById = async(req, res) => {
    const airlineId = await airlineModel.airline.findOne({where: {id: parseInt(req.params.id)}});
    if (airlineId){
        res.status(200).json(airlineId);
    }else{
        res.status(500).send(`Entry not available`);
        console.error(`Could not find the specific entry - ID # ${req.params.id} not available`);
    }
}

exports.getAirlinesByName = async(req, res) => {
    const airlineName = await airlineModel.airline.findOne({where: {airline_name: req.query.name}});
    if (airlineName){
        res.status(200).json(airlineName);
    }else{
        res.status(500).send(`Airline not available`);
        console.error(`Could not find ${req.params.airline_name} in the airlines list`);
    }
}

exports.getAirlinesByCountry = async(req, res) => {
    const airlineCountry = await airlineModel.airline.findOne({where: {country: req.query.country}});
    if (airlineCountry){
        res.status(200).json(airlineCountry);
    }else{
        res.status(500).send(`Country not available in the list`);
        console.error(`Could not find ${req.query.country} as an available country`);
    }
}

exports.createAirline = async(req, res) => {
    const {airline_name,iata_code, icao_code, callsign, commenced_ops
        ,country, region, flag, headquarters, notes
     } = req.body;
    const newAirline = await airlineModel.airline.create({
        airline_name, iata_code, icao_code, callsign, commenced_ops, country, region, flag, headquarters, notes
    });

    newAirline ? res.status(201).json(newAirline) : res.status(404).send(`Error - could not create a new entry`);
}

exports.deleteAirlineById = async (req, res) => {
    const deletedId = await airlineModel.airline.destroy({where: {id: req.params.id}});
    if (deletedId){
        res.status(200).send(`Entry successfully deleted`);
    }else{
        res.status(500).send(`ID # ${req.params.id} not found - nothing was deleted`);
        console.error(`No records have been deleted`);
    }
}


exports.deleteAllAirlines = async (req, res) => {
    await airlineModel.airline.truncate();
    res.send("All entries were succesfully deleted!");
}

