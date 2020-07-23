const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({
      message: 'Acesso não autorizado.',
    })
  }

  const [, token] = authorization.split(' ')

  try {
    const verify = await jwt.verify(token, process.env.APP_KEY)

    return next()
  } catch (e) {
    return res.status(401).json({
      message: 'Chave de acesso inválida.',
    })
  }
}
