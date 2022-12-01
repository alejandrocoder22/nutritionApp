const pool = require('../database')

const getAllFood = async () => {
  try {
    return await pool.query('SELECT * FROM food ORDER BY food_name')
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
const createFoodDairy = async (grams, eatTime, userId, createdAt, foodId) => {
  try {
    return pool.query('INSERT INTO users_food_dairy (grams, eat_time, user_id, date_added, food_id) VALUES ($1, $2, $3, $4, $5)', [grams, eatTime, userId, createdAt, foodId])
  } catch (error) {
    return error
  }
}
const getDairyFoodByDate = async (date, userId) => {
  try {
    return await pool.query(`
    SELECT DISTINCT food.food_id, food_name, eat_time, proteins, carbs, fats, grams, is_verified FROM users_food_dairy 
    INNER JOIN food
    ON users_food_dairy.food_id = food.food_id  
    WHERE date_added = '${date}' 
    AND user_id = $1


    `, [userId]
    )
  } catch (error) {
    return error
  }
}

module.exports = { getDairyFoodByDate, createPublicFood, createFoodDairy, getAllFood }
