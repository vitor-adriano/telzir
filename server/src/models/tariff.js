const database = require('../app/database')

const Tariff = database.model('Tariff', {
  tableName: 'tariffs',
})

module.exports = Tariff
