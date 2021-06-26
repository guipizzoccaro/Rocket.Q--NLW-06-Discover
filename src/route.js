const express = require('express')

const route = express.Router()

// é literalemte mostrar a rota pro node
// Quando abrir o /sobre-guilherme => res.render("sobre")
route.get('/', (req, res) => res.render("index"))

module.exports = route
