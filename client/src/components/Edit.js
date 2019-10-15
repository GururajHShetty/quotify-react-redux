import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { startListQuotes } from '../actions/quotes'
import { InputGroup, InputGroupAddon, Button, Spinner } from 'reactstrap'


class QuoteEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            quote: '',
            author: ''
        }
    }

    componentDidMount() {
        const _id = this.props.match.params.id

        if (this.props.quotes.length > 0) {
            const quoteToEdit = this.props.quotes.find(quote => {
                return quote._id === _id
            })

            const id = quoteToEdit._id
            const quote = quoteToEdit.quoteText
            const author = quoteToEdit.quoteAuthor
            this.setState({ quote, author, id })
        } else {
            axios.get(`http://localhost:3010/quote/get/${_id}`)
                .then(response => {
                    const id = response.data._id
                    const quote = response.data.quoteText
                    const author = response.data.quoteAuthor
                    this.setState({ quote, author, id })
                })
        }
        // console.log(this.props.quotes)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const id = this.state.id
        const quote = {
            quoteText: this.state.quote,
            quoteAuthor: this.state.author
        }

        axios.put(`http://localhost:3010/quote/edit/${id}`, quote)
            .then(response => {
                this.props.dispatch(startListQuotes())
                this.props.history.push('/quotes')
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <h2>Edit Quote</h2>
                {
                    this.state.quote ? (<div>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Quote</InputGroupAddon>
                            <textarea type="text" name="quote" value={this.state.quote} rows="5" cols="50" onChange={this.handleChange} />
                        </InputGroup>
                        <br></br>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Author</InputGroupAddon>
                            <textarea type="text" name="author" value={this.state.author} rows="3" cols="25" onChange={this.handleChange} />
                        </InputGroup>
                    </div>) : (<Spinner color="secondary" />)
                }

                <br></br><br></br>
                <Button>Submit</Button>
            </form>
        )
    }
}

const mapStatetoProps = state => {
    return {
        quotes: state.quotes
    }
}

export default connect(mapStatetoProps)(QuoteEdit)