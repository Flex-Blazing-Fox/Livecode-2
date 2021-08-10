const AnimalController = require('../controllers/AnimalController')

const router = require('express').Router()

router.get('/', AnimalController.getAllAnimal)

module.exports = router