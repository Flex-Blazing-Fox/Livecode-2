const FavoriteController = require('../controllers/FavoriteController')
const { authorization } = require('../middleware/auth')

const router = require('express').Router()

router.get('/', FavoriteController.getAllFavorites)
router.post('/:animalId', authorization, FavoriteController.addToFavourtie)
router.delete('/:id', authorization, FavoriteController.deleteFavorite)

module.exports = router