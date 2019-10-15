import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import QuoteShow from './components/Show'
import QuotesList from './components/List'
import QuoteEdit from './components/Edit'
import { Breadcrumb, BreadcrumbItem, Badge } from 'reactstrap'
// import './App.css'

function App(props) {
  return (
    <BrowserRouter >
      <div>
        <div className="App">
          <h2><Badge color="success">Quotify</Badge></h2>
          <Breadcrumb>
            <BreadcrumbItem active ><Link to="/">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active><Link to="/quotes" >Saved Quotes</Link></BreadcrumbItem>
          </Breadcrumb>
        </div>
        {/* <Link to="/quotes/new">Add Quote</Link> */}


        <Route path="/" component={QuoteShow} exact={true} />
        <Route path="/quotes" component={QuotesList} exact={true} />
        <Route path="/quote/edit/:id" component={QuoteEdit} />
        {/* <Route path="/quotes/new" component={QuotesList}  /> */}

      </div>
    </BrowserRouter>
  )
}

export default App