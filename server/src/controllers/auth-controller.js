const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body

    try {
      const user = await new User().where({ email }).fetch({
        withRelated: ['plan'],
      })

      const validPassword = await bcrypt.compare(
        password,
        user.attributes.password
      )

      if (!validPassword) throw new Error()

      return res.send(jwt.sign(user.toJSON(), process.env.APP_KEY))
    } catch (e) {
      return res.status(422).json({
        message: 'E-mail ou senha incorretos.',
      })
    }
  },

  register: async (req, res) => {
    const { name, email, password } = req.body

    await new User().save({ name, email, password })

    return res.sendStatus(201)
  },
}
