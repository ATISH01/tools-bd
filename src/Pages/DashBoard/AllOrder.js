import React from 'react';
import { useQuery } from 'react-query';
import OrderRow from './OrderRow';

const AllOrder = () => {
    const { data: orders, isLoading } = useQuery('order', () => fetch('http://localhost:5000/order')
        .then(res => res.json()))
    if (isLoading) {
        return;
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order=><OrderRow order={order}></OrderRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllOrder;