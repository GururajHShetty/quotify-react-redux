const quoteReducer = (state = {}, action) => {
    switch (action.type) {
        case 'NEXT_QUOTE': {
            return {...action.payload}
        }
        default: {
            return {...state}
        }
    }
}

export default quoteReducer