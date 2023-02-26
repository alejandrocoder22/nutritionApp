const pool = require('../../src/database/index')

const cleanUser = () => {
  return pool.query("DELETE FROM users WHERE username = 'testUser'")
}

module.exports = cleanUser
