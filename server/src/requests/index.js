const { validationResult } = require('express-validator')

module.exports = callback => [
  callback,
  (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }

    const response = {}

    errors.array().forEach(({ param, msg }) => {
      if (!(param in response)) {
        response[param] = msg
      }
    })

    return res.status(422).json({
      errors: response,
    })
  },
]
