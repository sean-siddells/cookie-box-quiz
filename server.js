const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')
const server = express()

module.exports = server

// Server config
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars config
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Router config
server.use('/question', routes)

// home route config

server.get('/', (req, res) => {
  res.render('home')
})

