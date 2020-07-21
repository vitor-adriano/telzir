module.exports.up = knex => {
  return knex.schema.createTable('plans', table => {
    table.increments('id').primary()
    table.string('name').notNullable().unique()
    table.integer('free_minutes').notNullable()
  })
}

module.exports.down = knex => {
  return knex.schema.dropTable('plans')
}
