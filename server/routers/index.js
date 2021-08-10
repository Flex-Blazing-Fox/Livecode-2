const router = require('express').Router()
const { User, Favourite_Animals, Animal } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { authorize } = require('../middlewares/auth')

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
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ error: 'user not found' })
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password)

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: 'password is incorrect'})
    }

    const payload = {
      id: user.id,
      email: user.email
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET)

    return res.status(200).json({
      ...payload,
      token
    })
  } catch (err) {
    return res.status(500).json({ error: err })
  }
})

router.get('/animals', authorize, async (req, res) => {
  try {
    const animals = await Animal.findAll()

    return res.status(200).json({ animals })
  } catch (err) {
    return res.status(500).json({ error: err })
  }
})

router.post('/favorites/:animalId', authorize, async (req, res) => {
  try {
    const { animalId } = req.params

    const favorite = await Favourite_Animals.create({
      animalId,
      userId: req.user.id
    })

    return res.status(201).json({ favorite })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: err })
  }
})

router.get('/favorites', authorize, async (req, res) => {
  try {
    const favorites = await Favourite_Animals.findAll({ 
      where: { 
        userId: req.user.id
      },
      include: Animal
    })

    return res.status(200).json({ favorites })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: err })
  }
})

router.delete('/favorites/:id', authorize, async (req, res) => {
  try {
    const { id } = req.params
    const rows = await Favourite_Animals.destroy({
      where: {
        id
      }
    })

    return res.status(200).json({
      message: "Successfully delete favorite animal"
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: err })
  }
})

module.exports = router