const bcrypt = require('bcrypt')
const usersServices = require('../services/usersServices')
const jwt = require('jsonwebtoken')

const getAllUsers = async (req, res) => {
  try {
    const users = await usersServices.getAllUsers()
    res.status(200).send({ status: 'sucess', data: users.rows })
  } catch (error) {

  }
}

const createUser = (req, res) => {
  const { username, password } = req.body
  const saltRounds = 10
  try {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        return res.status(400).send({ status: 'Error', msg: err.message })
      }
      usersServices.createUser(username, hash).then(response => {
        if (response?.code === '23505') {
          return res.status(400).send({ status: 'Error', msg: 'Username already exist' })
        }
        res.send({ status: 'sucess', message: 'User Created' })
      })
    })
  } catch (error) {
    res.status(400).send({ status: 'Error', msg: 'Something went wrong' })
  }
}

const loginUser = async (req, res) => {
  const { username, password } = req.body

  try {
    const userExist = await usersServices.loginUser(username, password)
    if (userExist.rows[0].length < 1) {
      return res.status(400).send({ status: 'Error', message: 'User or Password is invalid' })
    }
    bcrypt.compare(password, userExist.rows[0].password, (err, result) => {
      if (err) {
        return res.status(400).send({ status: 'Error', message: 'User or Password is invalid' })
      }

      if (!result) {
        return res.status(400).send({ status: 'Error', message: 'User or Password is invalid' })
      }

      if (result) {
        const token = jwt.sign({ id: userExist.rows[0].userId, username: userExist.rows[0].username }, process.env.JWT_PASSWORD)
        return res.status(200).send({ status: 'sucess', token, message: 'Logged in' })
      }
    })
  } catch (error) {
    res.status(400).send({ status: 'Error', message: error.message })
  }
}
const deleteUser = (req, res) => {
  res.send('user Deleted')
}

module.exports = { createUser, loginUser, deleteUser, getAllUsers }
