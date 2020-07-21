module.exports.seed = async knex => {
  await knex('plans').truncate()
  return knex('plans').insert([
    {
      name: 'FaleMais 30',
      free_minutes: 30,
    },
    {
      name: 'FaleMais 60',
      free_minutes: 60,
    },
    {
      name: 'FaleMais 120',
      free_minutes: 120,
    },
  ])
}
