const Plan = require('../models/plan')

module.exports = {
  index: async (req, res) => {
    const plans = await new Plan().fetchAll({ withRelated: ['users'] })

    return res.json({
      data: plans,
    })
  },
}
