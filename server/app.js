require('dotenv').config()

const express = require('express')
const cors = require('cors')
const routers = require('./routers')

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routers)

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})