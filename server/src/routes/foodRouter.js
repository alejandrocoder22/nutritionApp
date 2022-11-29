const foodControllers = require('../controllers/foodControllers')

const router = require('express').Router()

router.get('/private/:userId', foodControllers.getAllPrivateFood)
router.get('/', foodControllers.getAllFood)

router.post('/', foodControllers.createPublicFood)
router.post('/dairy', foodControllers.createFoodDairy)
router.post('/private/:userId', foodControllers.createPrivateFood)

router.delete('/', foodControllers.deleteFood)

router.put('/', foodControllers.updateFood)

module.exports = router
