import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({orders}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [sucess, setSucess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret,setClientSecret]=useState('');
    const {price,itemName,email,_id}=orders;

    useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent',{
            method: 'POST',
            headers:{
                'content-type':'application/json',
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.clientSecret){
                setClientSecret(data.clientSecret);
            }
        })
    },[price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });


        setCardError(error?.message || '');
        setSucess('');
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name:itemName,
                        email: email 
                    },
                },
            },
        );
        if(intentError){
            setCardError(intentError?.message);
        }
        else{
            setCardError('')
            console.log(paymentIntent);
            setTransactionId(paymentIntent.id)
            setSucess('Congrats, Your payment is compelete')


            const payment = {
                orders: _id,
                transactionId: paymentIntent.id
            }
            console.log(payment);
            fetch(`http://localhost:5000/orders/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res=>res.json())
            .then(data => {
                
                console.log(data);
            })
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
               cardError && <p className='text-danger'> {cardError}</p>
            }
            {
               sucess && <div className='text-green-500'> 
               <p>{sucess}</p>
               <p>Your TransactionID id: <strong>{transactionId}</strong></p>
               </div>
            }
            
        </>
    );
};

export default CheckoutForm;