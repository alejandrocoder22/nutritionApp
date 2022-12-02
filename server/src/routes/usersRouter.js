const { createUser, loginUser, deleteUser, getAllUsers, verifyToken } = require('../controllers/usersControllers')

const router = require('express').Router()

router.get('/', getAllUsers)
router.get('/verify', verifyToken)
router.post('/register', createUser)
router.post('/login', loginUser)
router.delete('/', deleteUser)

module.exports = router
