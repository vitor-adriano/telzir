const db = require('../app/database')

module.exports = {
  index: async (req, res) => {
    const tariffs = await db('tariffs')

    res.json({
      data: tariffs,
    })
  },
}
