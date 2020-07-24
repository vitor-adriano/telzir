const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body

    try {
      const user = await new User().where({ email }).fetch()

      const validPassword = await bcrypt.compare(
        password,
        user.attributes.password
      )

      if (!validPassword) throw new Error()

      return res.send(jwt.sign(user.omit(['password']), process.env.APP_KEY))
    } catch (e) {
      return res.status(404).json({
        message: 'E-mail ou senha incorretos.',
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
