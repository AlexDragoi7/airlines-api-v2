const express = require('express');
const router = express.Router();

const airController = require('../controllers/airController')

router.get('/airlines', airController.getAllAirlines);
router.get('/airline', airController.getAirlinesByName);
router.get('/airline/country', airController.getAirlinesByCountry);
router.get('/airlines/:id', airController.getAirlinesById);
router.post('/newairline', airController.createAirline);
router.delete('/airlines/:id', airController.deleteAirlineById);
router.delete('/airlines', airController.deleteAllAirlines);

module.exports = router;