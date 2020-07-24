const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({
      message: 'Acesso não autorizado.',
    })
  }

  const [, token] = authorization.split(' ')

  try {
    const { id } = await jwt.verify(token, process.env.APP_KEY)

    req.user = await new User({ id }).fetch({
      withRelated: ['plan'],
    })

    return next()
  } catch (e) {
    return res.status(401).json({
      message: 'Chave de acesso inválida.',
    })
  }
}
