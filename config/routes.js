const express = require('express')
const router = express.Router()
const quoteController = require('../app/controllers/quoteController')

router.get('/', quoteController.get )
router.post('/',quoteController.create)
router.get('/quotes',quoteController.list)
router.delete('/quotes/:id',quoteController.destroy)



module.exports =  router