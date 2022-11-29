require('dotenv').config()
const express = require('express')

const userRoutes = require('./routes/usersRouter')
const foodRoutes = require('./routes/foodRouter')

const app = express()

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/food', foodRoutes)

const server = app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})

module.exports = { app, server }
