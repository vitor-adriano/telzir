const database = require('../app/database')

const Plan = database.model('Plan', {
  tableName: 'plans',
  users() {
    return this.hasMany('User')
  },
})

module.exports = Plan
