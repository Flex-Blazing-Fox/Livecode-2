require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./router')
const cors = require('cors')
const port = process.env.PORT || 3000
const http = require('http')
const server = http.createServer(app)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

server.listen(port, ()=>{
    console.log(`listen port: ${port}`);
})