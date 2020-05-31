const express = require('express')
const authController = require('../controllers/auth')
const router = express.Router()

router.post('/login', authController.login) //**this will let DB once a user logs in**

module.exports = router