const {Animal, User, Favorite} = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
class UserController {
    static register(req, res, next){
        const {email, password} = req.body
        User.create({
            email, 
            password
        })
        .then(result=>{
            res.status(201).json({id: result.id, email: result.email})
        })
    }
    static login(req, res, next){
        const {email, password} = req.body
        User.findOne({
            where: {email}
        })
        .then(result=>{
            const compare = bcrypt.compareSync(password, result.password)
            if(compare){
                const payload = {
                    userId: result.id
                }
                const token = jwt.sign(payload, process.env.JWT_SECRET)
                res.status(200).json({id: result.id, email:result.email, token})
            }
        })
        .catch(err=>{
            res.send(400).json({err})
        })
    }
}
class AnimalsController{
    static getAnimals(req, res, next){
        Animal.findAll()
        .then(animals=>{
            res.status(200).json({animals})
        })
        .catch(err=>{
            res.status(400).json({err})
        })
    }
}
class FavoriteController{
    static getFavorites(req, res, next){
        const userId = req.userId
        Favorite.findAll({
            where: {userId},
            include: [{
                model: Animal
            }]
        })
        .then(result=>{
            res.status(200).json({favorites: result})
        })
        .catch(err=>{
            res.status(400).json({err})
        })
    }
    static addFavorite(req, res, next){
        const {animalId} = req.params
        const userId = req.userId
        Favorite.create({animalId, userId})
        .then(result=>{
            res.status(200).json({favorite: result})
        })
        .catch(err=>{
            res.status(400).json({err})
        })
    }
    static deleteFavorite(req, res, next){
        const favorite = req.favorite
        const {id} = req.params
        favorite.destroy({
            where: {id}
        })
        .then((_)=>{
            res.status(200).json({"message": "Successfully delete favorite animal"})
        })
        .catch(err=>{
            res.status(400).json({err})
        })
    }
}

module.exports = {UserController, AnimalsController, FavoriteController}