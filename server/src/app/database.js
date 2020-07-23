const path = require('path')
const knex = require('knex')
const bookshelf = require('bookshelf')

const database = bookshelf(
  knex({
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, '..', 'database', 'database.sqlite'),
    },
    useNullAsDefault: true,
  })
)

module.exports = database
