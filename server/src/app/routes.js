const express = require('express')

const authController = require('../controllers/auth-controller')
const planController = require('../controllers/plan-controller')
const tariffController = require('../controllers/tariff-controller')
const userController = require('../controllers/user-controller')

const route = express()

route.post('/register', authController.register)
route.post('/login', authController.login)

route.get('/plans', planController.index)

route.get('/tariffs', tariffController.index)

route.put('/update', userController.update)
route.put('/update-plan', userController.updatePlan)

module.exports = route
