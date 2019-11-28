
const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
    ],
    orderTotal: 234223
};

const updateCardItem = (book, item = {}, quantity) => {
    // if (item) {
    //     return {
    //         ...item,
    //         count: item.count + 1,
    //         total: item.total + book.price
    //     };
    // } else {
    //     return {
    //         id: book.id,
    //         title: book.title,
    //         count: 1,
    //         total: book.price
    //     };
    // }

    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    }
};

const updateCardItems = (cardItems, item, idx) => {
    if (item.count === 0){
        return [
            ...cardItems.slice(0, idx),
            ...cardItems.slice(idx + 1)
        ]
    }

    if (idx === -1){
        return [
            ...cardItems,
            item
        ];
    }

    return [
        ...cardItems.slice(0, idx),
        item,
        ...cardItems.slice(idx + 1)
    ]
};

const updadeOrder = (state, bookId, quantity) => {
    const book = state.books.find((book) => book.id === bookId);
    const itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
    const item = state.cartItems[itemIndex];

    const newItem = updateCardItem(book, item, quantity);

    return {
        ...state,
        cartItems: updateCardItems(state.cartItems, newItem, itemIndex)
    };
};

const reducer = (state = initialState, action) => {
    console.log(action.type);
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
        case 'BOOK_ADDED_TO_CARD':
            return updadeOrder(state, action.payload, 1);
        case 'BOOK_REMOVED_FROM_CARD':
            return updadeOrder(state, action.payload, -1);
        case 'ALL_BOOKS_REMOVED_FROM_CARD':
            const item = state.cartItems.find(({id})=> id === action.payload);
            return updadeOrder(state, action.payload, -item.count);
        default:
            return state
    }
};

export default reducer;