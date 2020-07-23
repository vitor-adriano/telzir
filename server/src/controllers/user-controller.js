const User = require('../models/user')

module.exports = {
  update: async (req, res) => {
    const { id, name, email, password } = req.body

    await new User({ id }).save({ name, email, password })

    return res.sendStatus(200)
  },

  updatePlan: async (req, res) => {
    const { id, plan_id } = req.body

    await new User({ id }).save({ plan_id })

    return res.sendStatus(200)
  },
}
