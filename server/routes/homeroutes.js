const express = require('express');
const router = express.Router();
const homecontrollers = require('../controllers/homecontrollers')

router.post('/get_report',homecontrollers.getReport)
router.post('/get_cities',homecontrollers.getCities)

module.exports = router