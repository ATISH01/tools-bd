import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';


const Review = () => {
    const[orders,setOrders]=useState([])
    
     useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 p-9 gap-8 px-12 mx-auto' >
            {
              orders.map(order=><ReviewCard order={order}></ReviewCard>)  
            }
            
        </div>
    );
};

export default Review;