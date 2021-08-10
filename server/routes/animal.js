const router = require('express').Router()
const AnimalsController = require('../controllers/AnimalsControllers')

router.get('/', AnimalsController.getAnimals)

module.exports = router