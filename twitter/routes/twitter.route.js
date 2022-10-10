const {Router} = require('express')
const {twitterController} = require('../controllers/twitter.controller')
const router = Router()


router.post('/twitter', twitterController.createTwitter)
router.get('/twitter/:id',twitterController.findTwitter)

module.exports = router