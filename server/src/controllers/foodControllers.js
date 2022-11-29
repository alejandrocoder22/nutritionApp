const { errorMessage } = require('../helpers/postgressErrorsMessages')
const foodServices = require('../services/foodServices')

const getAllFood = async (req, res) => {
  try {
    const allFood = await foodServices.getAllFood()
    res.status(200).send({ status: 'sucess', data: allFood.rows })
  } catch (error) {
    res.status(400).send({ status: 'fail' })
  }
}

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
  const { grams, eatTime, createdAt, foodId } = req.body
  const { userId } = req.params
  const response = await foodServices.createFoodDairy(grams, eatTime, userId, createdAt, foodId)
  if (response.code) {
    return res.status(400).send({ status: 'error', message: errorMessage(response.code) })
  }
  res.status(200).send({ status: 'sucess', message: 'Food created' })
}
const getDairyFoodByDate = async (req, res) => {
  const { userId } = req.params
  const { date } = req.body
  try {
    const allFood = await foodServices.getDairyFoodByDate(date, userId)

    if (allFood.code) {
      return res.status(400).send({ status: 'fail', message: errorMessage(allFood.message) })
    }
    res.status(200).send({ status: 'sucess', data: allFood.rows })
  } catch (error) {
    res.status(400).send({ status: 'fail', message: error.message })
  }
}
module.exports = {
  createPublicFood,
  getDairyFoodByDate,
  getAllFood,
  createFoodDairy
}
