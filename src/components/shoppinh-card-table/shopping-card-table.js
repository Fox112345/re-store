import React from 'react'
import './shopping-card-table.css'
import { connect } from 'react-redux'



const ShoppingCardTable = ({ items, total, onInc, onDec, onDel }) => {
    const renderRow = (items, idx)=>{
        const {id, name, count, total} = items;
        return(
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
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
        items: state.cartItems,
        total: state.orderTotal
    }
};

const mapDispatchToProps = () => {
    return {
        onInc: (id)=> console.log("Inc " + id),
        onDec: (id)=> console.log('Dec ' + id),
        onDel: (id)=> console.log('Del ' + id)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCardTable)