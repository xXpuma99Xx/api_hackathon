require('./config/config')
const colors = require('colors')
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())

app.get('/', function (req, res) {
  res.send('API Hackathon')
})

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

app.use(bodyParser.json())
// app.use(require('./routes/index'))

app.listen(process.env.PORT, function () {
  console.log(
    `API Hackathon corriendo en el puerto: ${process.env.PORT}`.rainbow
  )
})
