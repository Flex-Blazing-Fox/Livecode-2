const router = require('express').Router()
const userRouter = require('./userRouter')
const animalRouter = require('./animalRouter')
const favoriteRouter = require('./favoritesRouter')
const { authentication } = require('../middleware/auth')

router.use('/', userRouter)
router.use('/animals', authentication, animalRouter)
router.use('/favourites', authentication, favoriteRouter)
module.exports = router