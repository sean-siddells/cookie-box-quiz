const express = require('express')
const { getData, writeData } = require('./utils')
const router = express.Router()



module.exports = router

// router.post('/:id', (req, res) => {
//   getData('data.json', (err, questionData) => {
//     if (err) {
//       res.status(500).send('Whoops! Somebody stuffed')
//       return
//     }

//     const initID = 0
//     const viewData = questionData.questions.find(question => question.id.toString() > initID)
//     res.render('question', viewData)
//   })
// })

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
    console.log(req.body.answers);


    console.log ('questionData: ', questionData)
    const newArr = [...questionData.answers, req.body.answers]
    const newData = {answers: newArr}
    writeData('answers.json', newData, (err) => {
      if (err) {
        res.status(500).send('Whoops! Somebody stuffed')
        return
      }
    })
    console.log('We did it!')
    if (nextId > 9) {

    }
    res.redirect(`/question/${nextId}`)
  })

})






// router.get('/:id', (req,res) => {
//   const input= req.params.id
//   res.render('question', input)
// })