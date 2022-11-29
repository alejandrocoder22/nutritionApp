const pool = require('../database')

const getAllPrivateFood = async (userId) => {
  try {
    return await pool.query('SELECT * FROM food WHERE user_id = $1', [userId])
  } catch (error) {
    return error
  }
}
const getAllFood = async () => {
  try {
    return await pool.query('SELECT * FROM food WHERE is_private = false')
  } catch (error) {
    return error
  }
}
const createPublicFood = async (proteins, carbs, fats, foodName) => {
  try {
    return await pool.query('INSERT INTO food (proteins, carbs, fats, food_name) VALUES($1, $2, $3, $4)', [proteins, carbs, fats, foodName])
  } catch (error) {
    return error
  }
}
const createPrivateFood = async (foodName, proteins, carbs, fats, userId) => {
  try {
    return pool.query('INSERT INTO food (food_name, proteins, carbs, fats, user_id, is_private) VALUES ($1, $2, $3, $4, $5, $6)', [foodName, proteins, carbs, fats, userId, true])
  } catch (error) {
    return error
  }
}
const createFoodDairy = async (foodName, grams, eatTime, userId, createdAt) => {
  try {
    return pool.query('INSERT INTO users_food_dairy (food_name, grams, eat_time, user_id, date_added) VALUES ($1, $2, $3, $4, $5)', [foodName, grams, eatTime, userId, createdAt])
  } catch (error) {
    return error
  }
}

module.exports = { createPublicFood, createFoodDairy, createPrivateFood, getAllPrivateFood, getAllFood }
