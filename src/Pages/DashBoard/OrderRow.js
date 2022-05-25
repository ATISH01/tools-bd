import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order }) => {
    console.log(order);
    const { customerName,price, itemName, phone, transactionId } = order
    return (
        <>
            <tr>
                <th>{itemName}</th>
                <td>{customerName}</td>
                <td>{phone}</td>
                <td>
                {(price && !transactionId) && <button className='btn btn-xs btn-success'>unpaid</button>}
                {(price && transactionId) && <span className='text-success'>Pending</span>
                }
            </td>
            </tr>
            
        </>
    );
};

export default OrderRow;