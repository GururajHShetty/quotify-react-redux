import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import QuoteShow from './components/Show'
import QuotesList from './components/List'
// import './App.css'

function App(props) {
  return (
    <BrowserRouter >
      <div className="App">
        <h2>Quotify</h2>
        <Link to="/">Home</Link> |
        <Link to="/quotes" >Saved Quotes</Link>
        {/* <Link to="/quotes/new">Add Quote</Link> */}


        <Route path="/" component={QuoteShow} exact={true} />
        <Route path="/quotes" component={QuotesList} exact={true} />
        
        {/* <Route path="/quotes/new" component={QuotesList}  /> */}

      </div>
    </BrowserRouter>
  )
}

export default App