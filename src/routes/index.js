const express = require('express')
const app = express()

app.use(require('./perfil'))
app.use(require('./instrumento'))

module.exports = app
