const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

// Falar pro server que ele vai ler EJS
server.set('view engine', 'ejs')

// porcura a pasta public
server.use(express.static("public"))

// Mostrar onde está a pasta views com o path(as pastas do pc) join(juntar) e (dirname)
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({ extended: true }))

server.use(route)

server.listen(3000, () => console.log("Rodando"))