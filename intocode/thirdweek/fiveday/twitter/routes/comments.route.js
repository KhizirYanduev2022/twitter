const {Router} = require('express')
const router = Router()
const {commentsController} = require('../controllers/comments.controller')



router.post('/comments', commentsController.createComments)
router.get('/comments/twitter/:id', commentsController.findComments)

module.exports = router