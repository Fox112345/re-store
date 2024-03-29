import React from 'react'
import './shopping-card-table.css'
import { connect } from 'react-redux'
import { bookAddedToCard, allbooksRemovedFromCard, bookRemovedFromCard} from '../../actions'


const ShoppingCardTable = ({ items, total, onInc, onDec, onDel }) => {
    const renderRow = (items, idx)=>{
        const {id, title, count, total} = items;
        return(
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button
                        onClick={()=>onDel(id)}
                        className='btn btn-outline-danger'>
                        <i className='fa fa-trash-o'/>
                    </button>
                    <button
                        onClick={()=>onInc(id)}
                        className='btn btn-outline-danger'>
                        <i className='fa fa-plus-circle'/>
                    </button>
                    <button
                        onClick={()=>onDec(id)}
                        className='btn btn-outline-danger'>
                        <i className='fa fa-minus-circle'/>
                    </button>
                </td>
            </tr>
        )
    };

    return(
        <div className='shopping-cart-table'>
            <h2>Your order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    items.map(renderRow)
                }

                </tbody>
            </table>
            <div className='total'>
                Total: ${total}
            </div>
        </div>
    )
};

const mapStateToProps = (state)=>{
    return{
        items: state.shoppingCart.cartItems,
        total: state.shoppingCart.orderTotal
    }
};

const mapDispatchToProps = {
    onInc: bookAddedToCard,
    onDec: bookRemovedFromCard,
    onDel: allbooksRemovedFromCard
};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCardTable)