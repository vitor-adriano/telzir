const db = require('../app/database')

module.exports = {
  update: async (req, res) => {
    const { id, name, email, password } = req.body

    await db('users').where({ id }).update({ name, email, password })

    return res.sendStatus(200)
  },

  updatePlan: async (req, res) => {
    const { id, plan_id } = req.body

    await db('users').where({ id }).update({ plan_id })

    return res.sendStatus(200)
  },
}
