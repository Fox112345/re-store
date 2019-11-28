
const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        {
            id: 1,
            name: "123",
            count: 2,
            total: 4232
        },
        {
            id: 2,
            name: "345",
            count: 3,
            total: 232
        }
    ],
    orderTotal: 234223
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
              books: [],
              loading: true,
              error: null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILTURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
};

export default reducer;