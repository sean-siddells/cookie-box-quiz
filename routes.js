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




// router.get('/:id', (req,res) => {
//   const input= req.params.id
//   res.render('question', input)
// })