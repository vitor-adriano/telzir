const database = require('../app/database')

const User = database.model('User', {
  tableName: 'users',
  hidden: ['password'],
  plan() {
    return this.belongsTo('Plan')
  },
})

module.exports = User
