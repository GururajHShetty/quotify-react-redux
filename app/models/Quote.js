const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quoteSchema = new Schema({
    quoteText : {
        type:String,
        required:true
    },
    quoteAuthor : {
        type:String
    }
})

const Quote = mongoose.model('Quote',quoteSchema)

module.exports = Quote