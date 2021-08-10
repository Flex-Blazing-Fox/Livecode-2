const router = require('express').Router()
const {UserController, AnimalsController, FavoriteController} = require('../controller/index')
const {Authentication, Authorization} = require('../auth/auth')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.get('/animals', Authentication.auth, AnimalsController.getAnimals)

router.post('/favorites/:animalId',Authentication.auth, FavoriteController.addFavorite)
router.get('/favorites',Authentication.auth, FavoriteController.getFavorites)
router.delete('/favorite/:id',Authentication.auth, Authorization.auth, FavoriteController.deleteFavorite)

module.exports = router