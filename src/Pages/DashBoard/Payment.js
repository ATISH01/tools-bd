import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1WiFCCmWbm5mAs5LHAhNVe19iuo4GF2jfxkotgrHaKGH2Ci0koMmHm8x0nEKeAfXZ9MHfCp7dHGfbjxgkGl4rH00S43FFlZI');

const Payment = () => {
    const { id } = useParams()
    const url = `https://shrouded-sierra-24769.herokuapp.com/orders/${id}`;
    const { data: orders, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    );
    console.log(orders);
    if (isLoading) { return }
    return (
        <div>

            <div className="text-center lg:text-left">
                <h2 className="card-title">Pay for {orders.treatment}</h2>
                <p>We will see you on  at </p>
                <p>Please pay :${orders.price}</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="card w-96 bg-base-100 ">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm orders={orders} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;