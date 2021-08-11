const {Animal} = require('../models')

class AnimalsControllers{
    static getAnimals(req, res, next){
        console.log("masuk");
        Animal.findAll()

        .then((data)=> {
            res.status(200).json(data)
        })
        .catch((err)=>{
            next(err)
        })
    }
}

module.exports = AnimalsControllers