const router = require('express').Router()
const { User, Favourite_Animal, Animal } = require('../models')

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.create({ email, password })

    return res.status(201).json({ 
      id: user.id, 
      email: user.email
    })
  } catch (err) {
    return res.status(500).json({ error: err })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  try {
    
  } catch (err) {
    return res.status(500).json({ error: err })
  }
  await User.findOne({ email })
})

router.get('/animals')

router.post('/favorites/:animalId')

router.get('/favorites')

router.delete('/favorites/:id')

module.exports = router