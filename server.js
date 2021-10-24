const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')
const server = express()
const { getData, writeData, getAnswers } = require('./utils')
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
  const newData = { answers: [] }
  writeData('answers.json', newData, (err) => {
    if (err) {
      res.status(500).send('Whoops! Somebody stuffed')
      return
    }
  })
  res.render('home')
})


server.get('/outcome', (req, res) => {
  getData('answers.json', (err, answerData) => {
    if (err) {
      res.status(500).send('Whoops! Somebody stuffed up')
      return
    }
    const answersTotal = getAnswers(answerData.answers)
    console.log(answersTotal);
    if (answersTotal !== null) {
      getData('person.json', (err, personData) => {
        if (err) {
          res.status(500).send('Whoops! Somebody stuffed')
          return
        }
        console.log(personData);
        const viewData = personData.persons.filter(person => person.id === answersTotal).pop()
        console.log(viewData);
        res.render('outcome', viewData)
      })
    }
  })
})