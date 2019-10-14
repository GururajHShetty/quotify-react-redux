const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/quotify-project', { useNewUrlParser: true })
    .then(function(){
        console.log('connected to db')
    })
    .catch(function(){
        console.log('error while connecting to db')
    })

    module.exports = mongoose