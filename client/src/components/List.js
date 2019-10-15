import React from 'react'
import { startRemoveQuote } from '../actions/quote'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem, Spinner } from 'reactstrap'

class QuotesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quotesPerPage: 5,
            currentPage: 1
        }
    }

    handleclick(e) {
        const currentPage = e.target.value
        this.setState({ currentPage })
    }

    render() {
        const { currentPage, quotesPerPage } = this.state
        const indexOfLastQuote = currentPage * quotesPerPage
        const indexOfFirstQuote = indexOfLastQuote - quotesPerPage
        const currentQuotes = this.props.quotes.slice(indexOfFirstQuote, indexOfLastQuote)

        const pageNumbers = []
        for (let i = 1; i <= (Math.ceil(this.props.quotes.length / quotesPerPage)); i++) {
            pageNumbers.push(i)
        }

        return (
            <div>
                {
                    pageNumbers.map(number => {
                        return <Button outline color="success" key={number} value={number} onClick={this.handleclick.bind(this)}>{number}</Button>
                    })
                }
                <h2>Listing Quotes : {this.props.quotes.length}</h2>
                {
                    this.props.quotes.length > 0 ? (<ListGroup>
                        {
                            currentQuotes.map(quote => {
                                return (
                                    <div key={quote._id} >
                                        <ListGroupItem color="warning" >{quote.quoteText} ~ {quote.quoteAuthor}</ListGroupItem>
                                        <Button outline color="secondary" ><Link to={`/quote/edit/${quote._id}`}>Edit</Link></Button>
                                        <Button color="primary" onClick={() => {
                                            this.props.dispatch(startRemoveQuote(quote._id))
                                        }} >Remove</Button>
                                    </div>
                                )
                            })
                        }
                    </ListGroup>) : (<Spinner color="success" />)
                }

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        quotes: state.quotes
    }
}

export default connect(mapStateToProps)(QuotesList)