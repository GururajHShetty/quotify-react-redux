import axios from "axios"

export const listQuotes = quotes => {
    return {
        type: 'LIST_QUOTES',
        payload: quotes
    }
}


export const startListQuotes = () => {
    return dispatch => {
    axios.get('http://localhost:3010/quotes')
        .then(response => {
            const quotes = response.data
            dispatch(listQuotes(quotes))
        })}
}