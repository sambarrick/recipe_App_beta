const express = require('express')
const usersController = require('../controllers/usersController')
const router = express.Router()
const {authenticate}  = require('../middleware/index') //Look at your 311 projects, you might need to move the "index.js" file under middleware somewhere else.

router.get('/', usersController.getAllUsers)

router.post('/', usersController.addUser)

router.get('/:id', usersController.getUsersById) 

module.exports = router