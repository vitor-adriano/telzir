const { body } = require('express-validator')

const database = require('../app/database')
const validate = require('./index')

const emailAlreadyExists = async email => {
  const users = await database.knex('users').where({ email })
  if (users.length) {
    return Promise.reject('Este e-mail já está em uso.')
  }
}

const confirmPassword = (password, { req }) => {
  const { confirm_password } = req.body

  return (
    password === confirm_password || Promise.reject('As senhas não coincidem.')
  )
}

module.exports = validate([
  body('name').notEmpty().withMessage('Preencha este campo.'),
  body('email')
    .notEmpty()
    .withMessage('Preencha este campo.')
    .custom(emailAlreadyExists),
  body('password')
    .notEmpty()
    .withMessage('Preencha este campo.')
    .custom(confirmPassword),

  //
])
