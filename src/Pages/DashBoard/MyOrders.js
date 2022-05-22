import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';


const MyOrders = () => {
    
    /* const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/orders')
    .then(res => res.json())); */
    const[orders,setOrders]=useState([])
    
     useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
   /* if(isLoading){
       return;
   } */

   const CancelItem = id =>{
    // confirmation alert 
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                swal("Deleted!", {
                    icon: "success",})
                const remain = orders.filter(items=>items._id!==id);
                setOrders(remain)
                
            })
        } else {
          swal("Your data file is safe!");
        }
      });
    
    
        
}

    return (
        <div>
            <h2>Apointment:{orders?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time Color</th>
                            <th>Treatment</th>
                            <th>Order Status</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {orders?.map((a, index)=>
                            <tr>
                            <th>{index +1}</th>
                            <td>{a.itemName}</td>
                            <td>{a.customerName}</td>
                            <td>{a.email}</td>
                            <td>{a.phone}</td>
                            <td>
                                    <button onClick={()=>CancelItem(a._id)}  className='btn btn-xs btn-error mr-2 '>Cancel</button>
                                    <button className='btn btn-xs btn-success'>pay</button>
                                    
                                </td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;