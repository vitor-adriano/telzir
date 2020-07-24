module.exports = {
  update: async (req, res) => {
    const { name, email } = req.body

    req.user.save({ name, email })

    return res.sendStatus(200)
  },

  updatePlan: async (req, res) => {
    const { plan_id } = req.body

    req.user.save({ plan_id })

    return res.sendStatus(200)
  },
}
