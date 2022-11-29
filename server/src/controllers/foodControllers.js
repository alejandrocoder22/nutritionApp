const { errorMessage } = require('../helpers/postgressErrorsMessages')
const foodServices = require('../services/foodServices')

const createPublicFood = (req, res) => {
  const { proteins, carbs, fats, foodName } = req.body
  try {
    foodServices.createPublicFood(proteins, carbs, fats, foodName).then(response => {
      if (response.code) {
        return res.status(400).send({ status: 'error', message: errorMessage(response.code) })
      }
      res.status(200).send({ status: 'sucess', message: 'Food Added' })
    })
  } catch (error) {
    res.status(400).send({ status: 'error', message: error.message })
  }
}
const createFoodDairy = async (req, res) => {
  const { foodName, grams, eatTime, userId, createdAt } = req.body
  const response = await foodServices.createFoodDairy(foodName, grams, eatTime, userId, createdAt)
  if (response.code) {
    return res.status(400).send({ status: 'error', message: errorMessage(response.code) })
  }
  res.status(200).send({ status: 'sucess', message: 'Food created' })
}
const createPrivateFood = async (req, res) => {
  const { foodName, proteins, carbs, fats } = req.body
  const { userId } = req.params
  const response = await foodServices.createPrivateFood(foodName, proteins, carbs, fats, userId)
  if (response.code) {
    return res.status(400).send({ status: 'error', message: errorMessage(response.code) })
  }
  res.status(200).send({ status: 'sucess', message: 'Private food created' })
}
const getAllFood = async (req, res) => {
  try {
    const allFood = await foodServices.getAllFood()
    res.status(200).send({ status: 'sucess', data: allFood.rows })
  } catch (error) {
    res.status(400).send({ status: 'fail' })
  }
}
const getAllPrivateFood = async (req, res) => {
  const { userId } = req.params
  try {
    const allFood = await foodServices.getAllPrivateFood(userId)
    res.status(200).send({ status: 'sucess', data: allFood.rows })
  } catch (error) {
    res.status(400).send({ status: 'fail' })
  }
}
const deleteFood = (req, res) => res.send('Food deleted')
const updateFood = (req, res) => res.send('Food Updated')

const getFoodById = (req, res) => res.send('Food By Id')

module.exports = {
  createPublicFood,
  deleteFood,
  updateFood,
  getAllFood,
  getFoodById,
  createFoodDairy,
  createPrivateFood,
  getAllPrivateFood
}
