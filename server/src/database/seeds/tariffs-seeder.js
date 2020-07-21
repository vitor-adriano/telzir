module.exports.seed = async knex => {
  await knex('tariffs').truncate()
  return knex('tariffs').insert([
    {
      from: '011',
      to: '016',
      price_per_minute: 1.9,
    },
    {
      from: '016',
      to: '011',
      price_per_minute: 2.9,
    },
    {
      from: '011',
      to: '017',
      price_per_minute: 1.7,
    },
    {
      from: '017',
      to: '011',
      price_per_minute: 2.7,
    },
    {
      from: '011',
      to: '018',
      price_per_minute: 0.9,
    },
    {
      from: '018',
      to: '011',
      price_per_minute: 1.9,
    },
  ])
}
