import axios from 'axios'
import { startListQuotes } from '../actions/quotes'

export const nextQuote = quote => {
    return {
        type: 'NEXT_QUOTE',
        payload: quote
    }
}

export const getNextQuote = () => {
    return (dispatch) => {
        axios.get('http://localhost:3010')
            .then(response => {
                // console.log('getnextquote')
                const quote = response.data
                dispatch(nextQuote(quote))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const startSaveQuote = (quote) => {
    return dispatch => {
        axios.post('http://localhost:3010', quote)
            .then(response => {
                if (response.data.errors) {
                    window.alert('Already Saved')
                } else {
                    console.log(response.data)
                    dispatch(startListQuotes())
                }
            })
            .catch(err => {
                console.log(err)
            })

        // Promise.all([axios.post('http://localhost:3010', quote),axios.get('http://localhost:3010/quotes')])
        //     .then(values => {
        //         const quotes =  values[1]
        //         console.log('prmoise',quotes.data)
        //         dispatch(listQuotes(quotes.data))
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }
}

export const startRemoveQuote = id => {
    // console.log('Remove', id)
    return dispatch => {
        axios.delete(`http://localhost:3010/quotes/${id}`)
            .then(response => {
                // console.log('deleted',response.data)
                dispatch(startListQuotes())
            })
    }
}

