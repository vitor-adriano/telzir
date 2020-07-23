module.exports.seed = async knex => {
  await knex('tariffs').truncate()
  return knex('tariffs').insert([
    {
      code: '011',
      destinations: JSON.stringify([
        {
          code: '016',
          price: 1.9,
        },
        {
          code: '017',
          price: 1.7,
        },
        {
          code: '018',
          price: 0.9,
        },
      ]),
    },
    {
      code: '016',
      destinations: JSON.stringify([
        {
          code: '011',
          price: 2.9,
        },
      ]),
    },
    {
      code: '017',
      destinations: JSON.stringify([
        {
          code: '011',
          price: 2.7,
        },
      ]),
    },
    {
      code: '018',
      destinations: JSON.stringify([
        {
          code: '011',
          price: 1.9,
        },
      ]),
    },
  ])
}
