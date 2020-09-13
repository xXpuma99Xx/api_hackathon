const express = require('express')
const get = require('../controller/instrumento/get')
const app = express()
const route = '/instrumento'

app.get(route, (req, res) => {
  return get(req.query)
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(400).json({ err: err.message })
    })
})

module.exports = app
