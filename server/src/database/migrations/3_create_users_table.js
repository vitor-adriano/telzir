module.exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.string('current_plan').unsigned()

    table.foreign('current_plan').references('plans.id')
  })
}

module.exports.down = knex => {
  return knex.schema.dropTable('users')
}
