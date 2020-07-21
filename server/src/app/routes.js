const express = require('express')

const authController = require('../controllers/auth-controller')

const route = express()

route.post('/register', authController.register)
route.post('/login', authController.login)

module.exports = route
