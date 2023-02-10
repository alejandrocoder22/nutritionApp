const foodControllers = require('../controllers/foodControllers')
const verifyUser = require('../middlewares/verifyUser')

const router = require('express').Router()

router.get('/', foodControllers.getAllFood)
router.get('/dairy/:userId/:date', verifyUser, foodControllers.getDairyFoodByDate)
router.post('/', foodControllers.createPublicFood)
router.post('/dairy/:userId', foodControllers.createFoodDairy)

module.exports = router
