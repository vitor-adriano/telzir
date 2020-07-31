const jwt = require('jsonwebtoken')

module.exports = {
  update: async (req, res) => {
    const { name, email } = req.body

    await req.user.save({ name, email })

    return res.sendStatus(200)
  },

  updatePlan: async (req, res) => {
    const { plan_id } = req.body

    await req.user.save({ plan_id })
    const updatedUser = await req.user.fetch({ withRelated: ['plan'] })

    return res.send(jwt.sign(updatedUser.toJSON(), process.env.APP_KEY))
  },
}
