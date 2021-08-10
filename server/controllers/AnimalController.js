const { Animal } = require('../models')
class AnimalController {
    static getAllAnimal(req, res) {
        Animal.findAll()
        .then(animal => {
            let animals = animal.map(el => {
                return {
                    id: el.id,
                    name: el.name,
                    imageUrl: el.imageUrl,
                    description: el.description
                }
            })
            res.status(200).json({"animals":animals})
        })
        .then(err => {
            res.status(500).json(err)
        })
    }
}

module.exports = AnimalController