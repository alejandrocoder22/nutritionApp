const bcrypt = require('bcrypt')
const usersServices = require('../services/usersServices')
const jwt = require('jsonwebtoken')
const { hashPassword, comparePasswords } = require('../utils/crypto')

const getAllUsers = async (req, res) => {
  try {
    const users = await usersServices.getAllUsers()
    res.status(200).send({ status: 'sucess', data: users.rows })
  } catch (error) {

  }
}

const createUser = async (req, res) => {
  const { username, password } = req.body

  try {
    const hashedPassword = await hashPassword(password)
    const newUserResponse = await usersServices.createUser(username, hashedPassword)
    if (newUserResponse?.code) {
      return res.status(400).send({ status: 'Error', message: newUserResponse.code })
    }
    res.send({ status: 'sucess', message: 'User Created' })
  } catch (error) {
    res.status(400).send({ message: error.message })
  }
}

const loginUser = async (req, res) => {
  const { username, password } = req.body

  try {
    const userExist = await usersServices.loginUser(username, password)

    if (userExist.rows.length === 0) return res.status(400).send({ message: 'Username or Password is invalid' })

    const passwordDatabase = userExist.rows[0].password
    const usernameDatabase = userExist.rows[0].username
    const idDatabase = userExist.rows[0].user_id

    const compareResult = await comparePasswords(password, passwordDatabase)

    if (!compareResult) return res.status(400).send({ status: 'Error', message: 'User or Password is invalid' })

    const token = jwt.sign({ id: idDatabase, username: usernameDatabase }, process.env.JWT_PASSWORD)
    return res.status(200).send({ status: 'sucess', token, userName: usernameDatabase, message: 'Logged in' })
  } catch (error) {
    return res.status(400).send({ message: error.message })
  }
}
const deleteUser = (req, res) => {
  res.send('user Deleted')
}

const verifyToken = (req, res) => {
  const { token } = req.headers
  jwt.verify(token.split(' ')[1], process.env.JWT_PASSWORD, (err, decoded) => {
    if (err) {
      return res.status(400).send({ status: 'fail', message: err.message })
    }
    res.status(200).send({ status: 'sucess', data: decoded })
  })
}
module.exports = { createUser, loginUser, deleteUser, getAllUsers, verifyToken }
