const { errorMessage } = require('../helpers/postgressErrorsMessages')
const foodServices = require('../services/foodServices')

const createFood = (req, res) => {
  const { proteins, carbs, fats, foodName } = req.body
  try {
    foodServices.createFood(proteins, carbs, fats, foodName).then(response => {
      if (response.code) {
        return res.status(400).send({ status: 'error', message: errorMessage(response.code) })
      }
      res.status(200).send({ status: 'sucess', message: 'Food Added' })
    })
  } catch (error) {
    res.status(400).send({ status: 'error', message: error.message })
  }
}
const deleteFood = (req, res) => res.send('Food deleted')
const updateFood = (req, res) => res.send('Food Updated')
const getAllFoods = (req, res) => res.send('Get all foods')
const getFoodById = (req, res) => res.send('Food By Id')

module.exports = {
  createFood,
  deleteFood,
  updateFood,
  getAllFoods,
  getFoodById
}
