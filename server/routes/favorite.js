const router = require('express').Router()
const FavoriteController = require('../controllers/FavoriteControllers')
const {favoriteAuthor} = require('../middlewares/auth')

router.get('/', FavoriteController.getFavorite)
router.post('/:animalId', FavoriteController.addFavorite)
router.delete('/:id', favoriteAuthor, FavoriteController.deleteFavorite)

module.exports = router