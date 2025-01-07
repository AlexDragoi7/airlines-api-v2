const express = require('express');
const router = express.Router();

const airController = require('../controllers/airController')

router.get('/airlines', airController.getAllAirlines);
router.post('/newairline', airController.createAirline);
router.delete('/airlines', airController.deleteAllAirlines);

module.exports = router;