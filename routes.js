const express = require('express')
const { getData, writeData } = require('./utils')
const router = express.Router()



module.exports = router



router.get('/:id', (req,res) => {
  getData('data.json', (err, questionData) => {
    if (err) {
      res.status(500).send('Whoops! Somebody stuffed')
      return
    }
    const viewData = questionData.questions.find(question => question.id.toString() === req.params.id)
    res.render('question', viewData)
  })
})



router.post('/:id', (req, res) => {
  getData('answers.json', (err, questionData) => {
    if (err) {
      res.status(500).send('Whoops! Somebody stuffed up. One sec!')
      return
    }
    const nextId = parseInt(req.params.id ) + 1
    const newArr = [...questionData.answers, req.body.answers]
    console.log(newArr)
    const newData = {answers: newArr}
    if (nextId > 9) {
     res.redirect('/outcome')
    } else {
      writeData('answers.json', newData, (err) => {
          if (err) {
              res.status(500).send('Whoops! Somebody stuffed')
              return
            }
          })
          console.log('We did it!')
          res.redirect(`/question/${nextId}`)
    }
      })



})

