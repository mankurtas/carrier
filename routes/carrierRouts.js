const express = require('express');
const carrierController = require('../controllers/carrierController');

const {getAllCarrierData} = carrierController;

const router = express.Router();

router.route('/').get(getAllCarrierData);

module.exports = router;