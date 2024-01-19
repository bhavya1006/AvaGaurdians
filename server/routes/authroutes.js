const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/authcontrollers');
const authMiddleware = require('../middlewares/authmiddleware');

router.post('/singup',authMiddleware,authcontrollers.Singup)
router.post('/login',authMiddleware,authcontrollers.Login)

module.exports = router;