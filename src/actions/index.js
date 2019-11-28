
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