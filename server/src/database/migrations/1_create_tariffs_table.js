module.exports.up = knex => {
  return knex.schema.createTable('tariffs', table => {
    table.increments('id').primary()
    table.string('from').notNullable()
    table.string('to').notNullable()
    table.float('price_per_minute').notNullable()
  })
}

module.exports.down = knex => {
  return knex.schema.dropTable('tariffs')
}
