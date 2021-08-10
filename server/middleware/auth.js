const jwt = require('jsonwebtoken')
const { User, Favorite } = require('../models')

const authentication = (req,res, next) => {
    if(!req.headers.access_token){
        throw "You Are Not Login"
    }

    try{
        const decoded = jwt.verify(req.headers.access_token, process.env.JWT_SECRET)
    }catch(err){
        res.status(401).json(err)
    }
}

const authorization = (req, res, next) => {

}

module.exports = { authentication, authorization}