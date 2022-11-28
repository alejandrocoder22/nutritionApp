const pool = require('../database')

const createFood = async (proteins, carbs, fats, foodName) => {
  try {
    return await pool.query('INSERT INTO foods (proteins, carbs, fats, foodName) VALUES($1, $2, $3, $4)', [proteins, carbs, fats, foodName])
  } catch (error) {
    return error
  }
}
module.exports = { createFood }
