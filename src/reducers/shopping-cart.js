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
    const {bookList:{ books }, shoppingCart: { cartItems }} = state;

    const book = books.find((book) => book.id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];

    const newItem = updateCardItem(book, item, quantity);

    return {
        orderTotal: 0,
        cartItems: updateCardItems(cartItems, newItem, itemIndex)
    };
};

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [
            ],
            orderTotal: 0
        }
    }

    switch (action.type) {
        case 'BOOK_ADDED_TO_CARD':
            return updadeOrder(state, action.payload, 1);
        case 'BOOK_REMOVED_FROM_CARD':
            return updadeOrder(state, action.payload, -1);
        case 'ALL_BOOKS_REMOVED_FROM_CARD':
            const item = state.shoppingCart.cartItems.find(({id})=> id === action.payload);
            return updadeOrder(state, action.payload, -item.count);
        default:
            return state.shoppingCart
    }
};

export default updateShoppingCart;