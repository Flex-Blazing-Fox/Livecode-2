const {User, Favorite} = require('../models')
const jwt = require('jsonwebtoken')

class Authentication{
    static auth(req, res, next){
        if(!req.headers.token){
            throw {err: 'TOKEN_NOT_FOUND'}
        }
        try{
            const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET)
            User.findOne({
                where:{id: decoded.userId}
            })
            .then(result=>{
                if(result){
                    req.userId = result.id
                }
                else{
                    throw{err: 'ACCESS_DENIED'}
                }
            })
            .catch(err=>{
                next(err)
            })
        }
        catch(err){
            next({err: 'INVALID_TOKEN'})
        }
    }
}

class Authorization{
    static auth(req, res, next){
        const userId = req.userId
        Favorite.findOne({
            where: {userId}
        })
        .then(result=>{
            if(result){
                req.animal= result
            }
            else{
                throw{err: 'FAVORITE_NOT_FOUND'}
            }
        })
    }
}
module.exports = {Authentication, Authorization}