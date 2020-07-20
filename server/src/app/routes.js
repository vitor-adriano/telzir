const express = require('express')

const route = express()

route.get('/', (req, res) => res.sendStatus(200))

module.exports = route
