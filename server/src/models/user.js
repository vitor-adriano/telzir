const bcrypt = require('bcrypt')
const database = require('../app/database')

const User = database.model('User', {
  tableName: 'users',
  hidden: ['password'],

  initialize() {
    this.on('creating', async (model, attrs) => {
      attrs.password = await bcrypt.hash(attrs.password, 12)
    })
  },

  plan() {
    return this.belongsTo('Plan')
  },
})

module.exports = User
