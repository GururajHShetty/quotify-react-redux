import React from 'react'
import { getNextQuote, startSaveQuote } from '../actions/quote'
import { connect } from 'react-redux'

function QuoteShow(props) {
    return (
        <div>
            <h4>{props.quote.quoteText}</h4>
            <p>{props.quote.quoteAuthor}</p>
            <br></br>
            <button onClick={() => {
                props.dispatch(getNextQuote())
            }} >Next</button>   
            <button  onClick={() => {
                props.dispatch(startSaveQuote(props.quote))
            }} >Save</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote
    }
}

export default connect(mapStateToProps)(QuoteShow)