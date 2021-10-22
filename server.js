const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')
const server = express()
const { getData } = require('./utils')
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

server.get('/outcome', (req, res) => {
  getData('person.json', (err, personData) => {
    if (err) {
      res.status(500).send('Whoops! Somebody stuffed')
      return
    }
    const viewData = personData.persons[4]
    res.render('outcome', viewData)
  })
})