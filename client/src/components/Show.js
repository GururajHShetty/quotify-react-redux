import React from 'react'
import { getNextQuote, startSaveQuote } from '../actions/quote'
import { connect } from 'react-redux'
import { Spinner } from 'reactstrap'
import '../App.css'

function QuoteShow(props) {
    return (
        <div className="App" >
            <br /><br />
            {
                props.quote.quoteText ? (<div>
                    <h4>{props.quote.quoteText}</h4>
                    <p>{props.quote.quoteAuthor}</p>
                    <br></br>
                    <button onClick={() => {
                        props.dispatch(getNextQuote())
                    }} >Next</button>
                    <button onClick={() => {
                        const confirm = window.confirm('Do you want to save this quote')
                        if (confirm) {
                            props.dispatch(startSaveQuote(props.quote))
                        }
                    }} >Save</button>
                </div>) : (
                    <div>
                        <Spinner type="grow" color="success" />
                        <Spinner type="grow" color="warning" />
                        <Spinner type="grow" color="secondary" />
                        <Spinner type="grow" color="primary" />
                    </div>
                )
            }
        </div>

    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote
    }
}

export default connect(mapStateToProps)(QuoteShow)