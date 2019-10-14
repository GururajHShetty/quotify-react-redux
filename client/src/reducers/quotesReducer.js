// const quotes = []

const quotesReducer = (state = [], action) => {
    // console.log(action)
    switch (action.type) {
        case 'LIST_QUOTES': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}

export default quotesReducer