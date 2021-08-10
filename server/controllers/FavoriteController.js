const { Favorite, Animal } = require('../models')

class FavoriteController {
    static getAllFavorites(req, res) {
        Favorite.findAll({
            attributes: ["id","userId","animalId"],
            include: {
                attributes: ["id","name","imageUrl","description"],
                model:Animal
            }
        })
            .then(favorite => {
                res.status(200).json({"favorites": favorite})
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
    
    static addToFavourtie(req, res){
        const { animalId } = req.params
        
        Favorite.create({userId:req.userId, animalId})
            .then(data => {
                res.status(200).json({"favorite":{
                    id: data.id,
                    animalId: data.animalId,
                    userId: data.userId
                }})
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static deleteFavorite(req,res) {
        
        const { favorites } = req

        favorites
        .destroy()
        .then(() => {
            res.status(200).json({"message": "data successfully deleted"})
        })
        .catch(err => {
            res.status(500).json(err)
        })

    }
}

module.exports = FavoriteController