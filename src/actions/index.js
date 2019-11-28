
const booksLoaded = (newBooks) => {
    return{
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
};

const bookRequetsed = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILTURE',
        payload: error
    }
};

export const bookAddedToCard = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CARD',
        payload: bookId
    }
};

export const bookRemovedFromCard = (bookId) => {
    return {
        type: 'BOOK_REMOVED_FROM_CARD',
        payload: bookId
    }
};

export const allbooksRemovedFromCard = (bookId) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CARD',
        payload: bookId
    }
};

const fetchBooks = (bookstoreService, dispatch) => () =>{
    dispatch(bookRequetsed());
    bookstoreService.getBooks()
        .then((data)=>{
            dispatch(booksLoaded(data))
        })
        .catch((err)=>{
            dispatch(booksError(err))
        });
};


export {
    fetchBooks
}