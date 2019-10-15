const express = require('express')
const mongoose = require('./config/database')
const port = process.env.PORT || 3010
const app = express()
const cors = require('cors')
const router = require('./config/routes')
const path = require('path')
const publicPath = path.join(__dirname, '..', 'public')

app.use(express.json())
app.use(cors())

app.use('/',router)

app.listen(port, function(){
    console.log('listening on port', port)
})

app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});