import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from 'react-redux';

import { withBookstoreService } from '../hoc'
import { fetchBooks, bookAddedToCard } from "../../actions";
import './book-list.css'
import { compose } from '../../utils'
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({books, onAddedToCard}) =>{
    return(
        <ul className='book-list'>
            {
                books.map((book)=>{
                    return(
                        <li key={book.id}>
                            <BookListItem book={book}
                                          onAddedToCard={()=> onAddedToCard(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
    )
};



class BookListContainer extends Component{

    componentDidMount() {
        this.props.fetchBooks();
    };


    render() {
        const  { books, loading, error, onAddedToCard } = this.props;
        if (loading){
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <BookList books={books} onAddedToCard={onAddedToCard}/>
    }
}


const mapStateToProps = (state) =>{
    return{
        books: state.books,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps;
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCard: (id)=>dispatch(bookAddedToCard(id))
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookListContainer)

