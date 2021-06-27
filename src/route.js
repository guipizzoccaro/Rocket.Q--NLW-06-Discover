const { render } = require('ejs')
const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

// é literalemte mostrar a rota pro node
// Quando abrir o /sobre-guilherme => res.render("sobre")

route.get('/', (req, res) => res.render("index", { page: 'enter-room' }))
route.get('/create-pass', (req, res) => res.render("index", { page: 'create-pass' })) //passando a variavel da part

route.get('/room/:room', (req, res) => res.render("room"))
// Formato que o form de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)
module.exports = route
