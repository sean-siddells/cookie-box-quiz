const express = require('express')
const { getData, writeData } = require('./utils')
const router = express.Router()


module.exports = router
router.get('/:id', (req,res) => {
  const input= req.params.id
  console.log(input);
  res.render('question')
})




// router.get('/:id', (req,res) => {
//   const input= req.params.id
//   res.render('question', input)
// })