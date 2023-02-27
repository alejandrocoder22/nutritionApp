require('dotenv').config()
const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/usersRouter')
const foodRoutes = require('./routes/foodRouter')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/food', foodRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})

module.exports = { app }
