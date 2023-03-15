const foodControllers = require('../controllers/foodControllers')
const verifyUser = require('../middlewares/verifyUser')

const router = require('express').Router()

router.get('/', foodControllers.getAllFood)
router.get('/dairy/:date', verifyUser, foodControllers.getDairyFoodByDate)
router.post('/', foodControllers.createPublicFood)
router.post('/dairy/food', verifyUser, foodControllers.createFoodDairy)
router.delete('/dairy/:foodId', verifyUser, foodControllers.deleteFoodDiary)

module.exports = router
