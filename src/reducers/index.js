import updateBookList from "./book-list";
import updateShoppingCart from "./shopping-cart";


const reducer = (state, action) => {
    return {
        shoppingCart: updateShoppingCart(state, action),
        bookList: updateBookList(state, action)
     }
};

export default reducer;