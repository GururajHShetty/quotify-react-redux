import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { getNextQuote } from './actions/quote'
import {startListQuotes} from './actions/quotes'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore()


// store.subscribe(() => {
//     console.log(store.getState())
// })

store.dispatch(getNextQuote())

store.dispatch(startListQuotes())

const ele = (
    <Provider store={store} >
        <App />
    </Provider>
)


ReactDom.render(ele, document.getElementById('root'))