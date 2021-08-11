const jwt = require('jsonwebtoken')
const { User, Favorite } = require('../models')

const authentication = (req,res, next) => {
    if(!req.headers.access_token){
        throw "You Are Not Login"
    }

    try{
        const decoded = jwt.verify(req.headers.access_token, process.env.JWT_SECRET)
        req.userId = decoded.id

        User.findOne({where:{id:decoded.id}})
            .then(user => {
                if(user) {
                    next()
                }else{
                    throw "User Not Found"
                }
            })
            .catch(err => {
                res.status(404).json(err)
            })
        
    }catch(err){
        res.status(401).json(err)
    }
}

const authorization = (req, res, next) => {
    const { id } = req.params

    Favorite.findOne({where:{id,userId:req.userId}})
        .then(data => {  
            if(data){
                req.favorites = data
                next()
            } else {
                throw "Data Not Found"
            }
        })
        .catch(err => {
            res.status(404).json(err)
        })
}

module.exports = { authentication, authorization}