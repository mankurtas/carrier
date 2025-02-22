const express = require('express');
const carrierController = require('../controllers/carrierController');

const {getAllCarrierData, getDistance, getBestPrice} = carrierController;

const router = express.Router();

router.route('/').get(getAllCarrierData).post(getDistance);

router.route('/price').post(getBestPrice);

module.exports = router;