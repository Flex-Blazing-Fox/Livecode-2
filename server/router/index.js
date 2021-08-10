const router = require('express').Router()
const userRouter = require('./userRouter')
const animalRouter = require('./animalRouter')
const favoriteRouter = require('./favoritesRouter')

router.use('/', userRouter)
router.use('/animals', animalRouter)
router.use('/favourites', favoriteRouter)
module.exports = router