const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// Server config
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars config
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// home route

