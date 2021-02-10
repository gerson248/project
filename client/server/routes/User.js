const express = require('express')
const userCtrl = require('../controllers/User')
const router = express.Router()

router.post('/signup', userCtrl.createUser)
router.post('/login', userCtrl.findUserByUsername)
router.get('/users', userCtrl.getUsers)
router.get('/user/:id', userCtrl.getUser)
router.put('/user/:id', userCtrl.updateUser)
router.delete('/user/:id', userCtrl.deleteUser)

module.exports = router
