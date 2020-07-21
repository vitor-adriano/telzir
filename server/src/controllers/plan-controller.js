const db = require('../app/database')

module.exports = {
  index: async (req, res) => {
    const plans = await db('plans')

    res.json({
      data: plans,
    })
  },
}
