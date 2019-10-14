import React from 'react'
import { startRemoveQuote } from '../actions/quote'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

function QuotesList(props) {
    // console.log(props)
    return (
        <div>
            <h2>Listing Quotes : {props.quotes.length}</h2>
            <ul>
            {
                props.quotes.map(quote => {
                    return (
                        <div key={quote._id}>
                            <li>{quote.quoteText} ~ {quote.quoteAuthor}</li>
                            <button ><Link to="/quote/edit">Edit</Link></button>
                            <button onClick={() => {
                                props.dispatch(startRemoveQuote(quote._id))
                            }} >Remove</button>
                        </div>
                    )
                })  
            }
            </ul>
            
        </div>
    )
}



const mapStateToProps = state => {
    // console.log(state)
    return {
       quotes : state.quotes
    }
}

export default connect(mapStateToProps)(QuotesList)