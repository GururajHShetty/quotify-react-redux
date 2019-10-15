const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quoteSchema = new Schema({
    quoteText : {
        type:String,
        required:true,
        unique:true
    },
    quoteAuthor : {
        type:String,
        unique:true
    }
})

const Quote = mongoose.model('Quote',quoteSchema)

module.exports = Quote