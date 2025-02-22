const express = require('express');
const carrierController = require('../controllers/carrierController');

const {getAllCarrierData, getDistance} = carrierController;

const router = express.Router();

router.route('/').get(getAllCarrierData).post(getDistance);

module.exports = router;