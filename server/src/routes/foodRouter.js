const foodControllers = require('../controllers/foodControllers')

const router = require('express').Router()

router.get('/', foodControllers.getAllFood)
router.get('/dairy/:userId/:date', foodControllers.getDairyFoodByDate)

router.post('/', foodControllers.createPublicFood)
router.post('/dairy/:userId', foodControllers.createFoodDairy)

module.exports = router
