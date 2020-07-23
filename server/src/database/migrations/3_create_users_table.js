module.exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
    table.integer('plan_id').unsigned().nullable()

    table.foreign('plan_id').references('id').inTable('plans')
  })
}

module.exports.down = knex => {
  return knex.schema.dropTable('users')
}
