const express = require('express')

const mw = require('../middlewares')

const registerRequest = require('../requests/register')

const authController = require('../controllers/auth-controller')
const planController = require('../controllers/plan-controller')
const tariffController = require('../controllers/tariff-controller')
const userController = require('../controllers/user-controller')

const route = express()

route.post('/register', registerRequest, authController.register)
route.post('/login', authController.login)

route.get('/plans', mw.auth, planController.index)

route.get('/tariffs', mw.auth, tariffController.index)

route.put('/update', mw.auth, userController.update)
route.put('/update-plan', mw.auth, userController.updatePlan)

module.exports = route
