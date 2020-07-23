const Tariff = require('../models/tariff')

module.exports = {
  index: async (req, res) => {
    const tariffs = await new Tariff().fetchAll()

    return res.json({
      data: tariffs,
    })
  },
}
