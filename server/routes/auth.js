const express = require('express')
const authController = require('../controllers/auth')
const router = express.Router()

router.post('/signup', authController.signup) //**this will post to the DB once a user signs up**

router.post('/login', authController.login) //**this will let DB once a user logs in**

module.exports = router