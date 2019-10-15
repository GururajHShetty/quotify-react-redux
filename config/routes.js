const express = require('express')
const router = express.Router()
const quoteController = require('../app/controllers/quoteController')

router.get('/', quoteController.show )
router.post('/',quoteController.create)
router.get('/quotes',quoteController.list)
router.delete('/quotes/:id',quoteController.destroy)
router.get('/quote/get/:id',quoteController.get)
router.put('/quote/edit/:id',quoteController.update)

module.exports =  router