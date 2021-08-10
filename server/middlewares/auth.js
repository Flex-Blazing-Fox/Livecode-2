const { User } = require('../models')
const jwt = require('jsonwebtoken')

const authorize = async (req, res, next) => {
  try {
    if (!req.headers.access_token) {
      return res.status(400).json({ error: 'please provide access token' })
    }

    const decodedUser = jwt.verify(req.headers.access_token, process.env.JWT_SECRET)

    const user = await User.findByPk(decodedUser.id)

    req.user = user

    next()
  } catch (err) {
    console.log(err)
    return res.status(401).json({ error: 'unauthorized' })
  }
}

module.exports = {
  authorize
}