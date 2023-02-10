const jwt = require('jsonwebtoken')

const verifyUser = (req, res, next) => {
  const token = req.header('token').split(' ')[1] || undefined

  const tokenDecoded = jwt.verify(token, process.env.JWT_PASSWORD)

  req.user = tokenDecoded

  next()
}

module.exports = verifyUser
