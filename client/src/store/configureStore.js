import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import quoteReducer from '../reducers/quoteReducer'
import quotesReducer from '../reducers/quotesReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        quote:quoteReducer,
        quotes:quotesReducer
    }), applyMiddleware(thunk))
    return store
}


export default configureStore