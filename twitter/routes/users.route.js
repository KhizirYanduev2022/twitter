const {Router} = require('express')
const router = Router()
const {usersController} = require('../controllers/users.controller')

router.post('/users', usersController.createUsers)

module.exports = router