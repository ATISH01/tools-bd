import React from 'react';
import { useQuery } from 'react-query';
import swal from 'sweetalert';
import OrderRow from './OrderRow';

const AllOrder = () => {
    const { data: orders, isLoading,refetch } = useQuery('order', () => fetch('http://localhost:5000/order')
        .then(res => res.json()))
    if (isLoading) {
        return;
    }
    const CancelItem = id => {
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
                    fetch(url, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            swal("Deleted!", {
                                icon: "success",
                            })
                            refetch();

                        })
                } else {
                    swal("Your data file is safe!");
                }
            });



    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Item Name</th>
                        <th>Customer</th>
                        <th>Phone</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order,index) => <OrderRow index={index} order={order} CancelItem={CancelItem} key={order._id}></OrderRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllOrder;