const db = require('../app/database')

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body

    const user = await db('users').where({ email, password }).first()

    if (!user) {
      return res.status(404).json({
        message: 'Conta não encontrada.',
      })
    }

    res.json({
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        current_plan: user.current_plan,
      },
    })
  },

  register: async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await db('users').where({ email }).first()

    if (userExists) {
      return res.status(400).json({
        message: 'Este e-mail já está cadastrado.',
      })
    }

    await db('users').insert({ name, email, password })

    return res.sendStatus(201)
  },
}
