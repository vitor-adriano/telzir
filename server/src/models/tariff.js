const database = require('../app/database')

const Tariff = database.model('Tariff', {
  tableName: 'tariffs',

  initialize() {
    this.on('creating', (model, attrs) => {
      attrs.destinations = JSON.stringify(attrs.destinations)
    })
  },

  parse(response) {
    if (response.id) {
      response.destinations = JSON.parse(response.destinations)
    }

    return response
  },
})

module.exports = Tariff
