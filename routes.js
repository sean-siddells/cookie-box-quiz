const express = require('express')
const server = require('./server')
const router = express.Router()


module.exports = router

router.get('/:id', (req,res) => {
  const input= req.params.id
  res.render('question', input)
})