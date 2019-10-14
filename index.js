const express = require('express')
const mongoose = require('./config/database')
const port = 3010
const app = express()
const cors = require('cors')
const router = require('./config/routes')

app.use(express.json())
app.use(cors())

app.use('/',router)

app.listen(port, function(){
    console.log('listening on port', port)
})