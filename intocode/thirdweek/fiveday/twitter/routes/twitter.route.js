const {Router} = require('express')
const {twitterController} = require('../controllers/twitter.controller')
const router = Router()


router.post('/twitter', twitterController.createTwitter)
router.get('/twitter/:id',twitterController.findTwitter)
router.patch('/twitter/likes/:id', twitterController.LikeupdateTwitter)
router.get('/twitter',twitterController.findAllTwitter)
router.patch('/twitter/saves/:id', twitterController.saveupdateTwitter)




module.exports = router