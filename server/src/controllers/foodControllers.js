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
  const { proteins, carbs, fats, food_name, kcal } = req.body
  try {
    foodServices.createPublicFood(proteins, carbs, fats, food_name, kcal).then(response => {
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
  const food = req.body
  const { userId } = req.params

  const response = await foodServices.createFoodDairy(food, userId)
  if (response?.code) {
    return res.status(400).send({ status: 'error', message: errorMessage(response.code) })
  }
  res.status(200).send({ status: 'sucess', message: 'Food created' })
}

const getDairyFoodByDate = async (req, res) => {
  const { date } = req.params

  try {
    const allFood = await foodServices.getDairyFoodByDate(date, req.user.id)

    if (allFood.code) {
      return res.status(400).send({ status: 'fail', message: errorMessage(allFood.message) })
    }

    res.status(200).send({ status: 'sucess', data: allFood.rows })
  } catch (error) {
    res.status(400).send({ status: 'fail', message: error.message })
  }
}

const deleteFoodDiary = (req, res) => {
  const { foodId } = req.params
  console.log(req.user.id)
  try {
    foodServices.deleteFoodDairy(req.user.id, foodId)
    res.status(200).send({ status: 'sucess', message: 'Food of dairy deleted' })
  } catch (error) {
    res.status(400).send({ status: 'fail', error })
  }
}
module.exports = {
  createPublicFood,
  getDairyFoodByDate,
  getAllFood,
  createFoodDairy,
  deleteFoodDiary
}
