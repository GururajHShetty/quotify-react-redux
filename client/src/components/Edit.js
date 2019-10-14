import React from 'react'

export default class QuoteEdit extends React.Component{
    constructor(){
        super()
        this.state = {
            quote:'',
            author:''
        }
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} >
                <label>Quote</label>
                <input type="text" name="quote" value={this.state.quote} />
                <br></br>
                <label>Quote</label>
                <input type="text" name="author" value={this.state.author} />
            </form>
        )
    }
}