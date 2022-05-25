import React, { useState } from 'react';


const OrderRow = ({ order,CancelItem }) => {
    console.log(order);
    const {index, customerName,price, itemName, phone, transactionId,_id} = order;
    const [confirm, setConfirm] = useState(false)
    const confirmButton = (state) => {
        // setConfirm(state)
        setConfirm(prevCheck => !prevCheck);
        console.log(confirm);
        

    }
    return (
        <>
            <tr>
                <th>{index}</th>
                <td>{itemName}</td>
                <td>{customerName}</td>
                <td>{phone}</td>
                <td>
                {(price && !transactionId) && <button className='btn btn-xs btn-success'>unpaid</button>}
                {(price && !transactionId) && <button onClick={()=>CancelItem(_id)} className='ml-2 btn btn-xs btn-error'>Cancel</button>}
                {(price && transactionId) && <button disabled={confirm} onClick={() => confirmButton(true)} className='btn btn-xs btn-success'> {confirm?<span>Confirmed</span>:<span>Pending</span> } </button>
                }
            </td>
            </tr>
            
        </>
    );
};

export default OrderRow;