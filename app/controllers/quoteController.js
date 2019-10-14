const axios = require('axios')
const Quote = require('../models/Quote')

module.exports.get = (req, res) => {
    axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en#')
        .then(response => {
            const quote = response.data
            res.json(quote)
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const quote = new Quote(body)

    quote.save()
        .then(quote => {
            res.json(quote)
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports.list = (req, res) => {
    Quote.find()
        .then(quotes => {
            // console.log(quotes)
            res.json(quotes)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Quote.findByIdAndDelete(id)
        .then(quote => {
            res.json(quote)
        })
        .catch(err => {
            res.json(err)
        })
}