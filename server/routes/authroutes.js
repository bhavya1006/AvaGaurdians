const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/authcontrollers');

router.post('/singup',authcontrollers.Singup)
router.post('/login',authcontrollers.Login)

module.exports = router;