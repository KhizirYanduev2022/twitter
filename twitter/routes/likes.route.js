const {Router} = require('express')
const router = Router()
const {likesController} = require('../controllers/likes.controller')

router.post('/likes', likesController.createLikes)
router.get('/likes',)

module.exports = router