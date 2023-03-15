const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
  const SALT_ROUNDS = 10
  return bcrypt.hash(plainPassword, SALT_ROUNDS)
}

const comparePasswords = (inputPassword, currentUserPassword) => {
  return bcrypt.compare(inputPassword, currentUserPassword)
}

module.exports = { hashPassword, comparePasswords }
