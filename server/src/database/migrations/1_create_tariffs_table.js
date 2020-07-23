module.exports.up = knex => {
  return knex.schema.createTable('tariffs', table => {
    table.increments('id').primary()
    table.string('code').notNullable().unique()
    table.json('destinations').notNullable()
  })
}

module.exports.down = knex => {
  return knex.schema.dropTable('tariffs')
}
