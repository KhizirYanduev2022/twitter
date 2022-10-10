const {Router} = require('express')
const router = Router()
const {savesController} = require('../controllers/saves.controller')

router.post('/saves', savesController.createSaves)


module.exports = router