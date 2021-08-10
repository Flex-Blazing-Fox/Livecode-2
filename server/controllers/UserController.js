const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models')

class UserController {
    static register(req, res, next) {
        const { email, password } = req.body

        User.create({email, password})
        .then(data => {
            res.status(201).json({
                id: data.id,
                email: data.email
            })
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    static login(req, res, next){
        const { email, password } = req.body
        console.log(email,password);
        User.findOne({where:{email}})
            .then(user => {
                if(user && bcrypt.compareSync(password, user.password)){
                    const payload = {
                        id: user.id,
                        email: user.email
                    }

                    const access_token = jwt.sign(payload, process.env.JWT_SECRET)

                    res.status(200).json({
                        id: user.id,
                        email: user.email,
                        access_token
                    })
                }else{
                    throw "Login Failed"
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = UserController