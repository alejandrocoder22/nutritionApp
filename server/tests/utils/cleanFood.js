const pool = require('../../src/database/index')

const cleanMockupFood = () => {
  return pool.query("DELETE FROM food WHERE food_name = 'test'")
}

module.exports = cleanMockupFood
