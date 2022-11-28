const pool = require('../database/index')

const createUser = async (username, password) => {
  try {
    await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password])
  } catch (error) {
    return error
  }
}

const loginUser = async (username, password) => {
  try {
    return await pool.query('SELECT *  FROM users WHERE username = $1', [username])
  } catch (error) {
    return error
  }
}

const getAllUsers = async () => {
  return await pool.query('SELECT * FROM users')
}

module.exports = { createUser, loginUser, getAllUsers }
