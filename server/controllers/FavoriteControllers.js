const {Favorite} = require('../models')

class FavoriteControllers{

    static addFavorite(req,res,next){
        const {animalId} = req.params
        const {userId} = req.body
        Favorite.create({userId,animalId})
        .then((favorite) =>{
            console.log(favorite);
        })
        .catch((err)=>{
            next(err)
        })

    }

    static getFavorite(req,res,next){
        Favorite.findAll()
        .then((favorite)=> {
            res.status(200).json({favorite})
        })
        .catch((err)=>{
            next(err)
        })
    }

    static deleteFavorite(req,res,next){
        const {id} = req.params
        Favorite.destroy({where:{id}})
        .then((data)=>{
            res.status(200).json({message:"Delete Success"})
        })

    }


}

module.exports = FavoriteControllers