const { createUser, loginUser, deleteUser, getAllUsers } = require('../controllers/usersControllers')

const router = require('express').Router()

router.get('/', getAllUsers)
router.post('/register', createUser)
router.post('/login', loginUser)
router.delete('/', deleteUser)

module.exports = router
