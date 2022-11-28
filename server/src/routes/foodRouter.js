const foodControllers = require('../controllers/foodControllers')

const router = require('express').Router()

router.post('/', foodControllers.createFood)
router.get('/', foodControllers.getAllFoods)
router.get('/:id', foodControllers.getFoodById)
router.delete('/', foodControllers.deleteFood)
router.put('/', foodControllers.updateFood)

module.exports = router
