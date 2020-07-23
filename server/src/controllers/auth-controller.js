const User = require('../models/user')

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body

    try {
      const user = await new User().where({ email, password }).fetch({
        withRelated: ['plan'],
      })

      return res.json(user)
    } catch (e) {
      return res.status(404).json({
        message: 'Conta não encontrada.',
      })
    }
  },

  register: async (req, res) => {
    const { name, email, password } = req.body

    try {
      await new User().save({ name, email, password })

      return res.sendStatus(201)
    } catch (e) {
      return res.status(400).json({
        message: 'Este e-mail já está cadastrado.',
      })
    }
  },
}
