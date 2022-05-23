import React from 'react';

const OrderRow = ({order}) => {
    console.log(order);
    const {customerName,itemName,phone}=order
    return (
        
            <tr>
                <th>{itemName}</th>
                <td>{customerName}</td>
                <td>{phone}</td>
                
            </tr>
      
    );
};

export default OrderRow;