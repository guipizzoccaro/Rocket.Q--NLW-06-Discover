const { render } = require('ejs')
const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

// é literalemte mostrar a rota pro node
// Quando abrir o /sobre-guilherme => res.render("sobre")

route.get('/', (req, res) => res.render("index", { page: 'enter-room' }))
route.get('/create-pass', (req, res) => res.render("index", { page: 'create-pass' })) //passando a variavel da part

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
// Formato que o form de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionController.index)
module.exports = route
