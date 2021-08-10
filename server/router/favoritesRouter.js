const FavoriteController = require('../controllers/FavoriteController')

const router = require('express').Router()

router.get('/', FavoriteController.getAllFavorites)
router.post('/:animalId', FavoriteController.addToFavourtie)
router.delete('/:id', FavoriteController.deleteFavorite)

module.exports = router