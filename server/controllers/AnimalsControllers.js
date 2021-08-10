const {Animal} = require('../models')

class AnimalsControllers{
    static getAnimals(req, res, next){
        Animal.findAll()
        .then((animals)=> {
            res.status(200).json({Animal: animals})
        })
        .catch((err)=>{
            next(err)
        })
    }
}

module.exports = AnimalsControllers