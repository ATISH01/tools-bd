import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm, useWatch } from 'react-hook-form';

import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebse.init';

const Purchases = () => {
    const [counter, setCounter] = useState(0);
    const navigate=useNavigate();

    const [user] = useAuthState(auth);
    const [plusError, setPlusError] = useState('');

    const [minusError, setMinusError] = useState('');

    const [singleItem, setSingleItem] = useState([])
    const { Id } = useParams();
    const { _id, name, img, price, availableItem
        , minPurse, selected
    } = singleItem;
    useEffect(() => {
        fetch(`https://shrouded-sierra-24769.herokuapp.com/tools/${Id}`)
            .then(res => res.json())
            .then(data => {setSingleItem(data)
                })
    }, [Id])


    const { register, handleSubmit, reset, formState } = useForm()
    const { errors } = formState;

    console.log(name);
    
    const onSubmit = async userData => {
       
        console.log(userData);
        const Data = { itemName: { name }, cart: { counter }, ...userData }
        console.log(Data);
        const url = 'https://shrouded-sierra-24769.herokuapp.com/orders';

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                navigate('/dashboard/myOrders')

            })

    }



    const increase = () => {
        setMinusError('');
        if (counter < availableItem) {
            setCounter(count => parseInt(count) + 1);

        }
        else {
            setPlusError('You can not select more then available');
            return;
        }
    };
    const decrease = () => {
        setPlusError('')

        if (counter > minPurse) {
            setCounter(count => count - 1);
        }
        else {
            setMinusError('Follow the minimum order')
            return;
        }
    };
    const changeValue = (e) => {
        setCounter(e.target.value);
    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className=" hero-content flex-col lg:flex-row-reverse gap-11">
                <div className=''>
                    <img className='lg:max-w-md max-w-sm' src={img} alt="" />
                    <p className='text-3xl'>{name}</p>

                    <p className='text-xl my-3'>Price:-<span className='border-2 border-black rounded mx-2'>  {price}$</span></p>
                    <p className='text-xl my-3'>Avialable:-<span className='border-2 border-black rounded mx-2'>  {availableItem}</span></p>
                    <p className='text-xl'>MinmumPurchaseQuantity:-<span className='border-2 border-black rounded mx-2'>  {minPurse}</span></p>
                    {/* <p className='text-xl my-2'>Product You Selected:<span className='border-2 border-black rounded mx-2'>  {selected} </span></p> */}
                    <div>

                        <div className="input-group number-spinner mt-6">
                            <button disabled={minusError} onClick={decrease} className="btn btn-warning rounded text-2xl">-</button>
                            <input onChange={changeValue} value={counter} className="form-control text-center" />
                            <button disabled={plusError} onClick={increase} className="btn btn-warning rounded text-2xl">+</button>
                            <p>{plusError}</p>
                            <p>{minusError}</p>
                        </div>

                    </div>
                </div>
                <div >
                    <h1 className="text-2xl my-10 font-bold">Provide information to confirm Your Order</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card  w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Item Name</span>
                                </label>
                                <input {...register("itemName")} value={name} required type="text"  placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Customer Name</span>
                                </label>
                                <input {...register("customerName", { required: true })} type="text" value={user.displayName} placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} value={user.email} type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input  {...register("phone", { required: true })} type="text" placeholder="Phone" className="input input-bordered input-accent w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input  {...register("price", { required: true })} type="text" placeholder="Price" className="input input-bordered input-accent w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="address" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Cart</span>
                                </label>
                                <input value={counter} {...register("cart")} type="text" placeholder="address" className="input input-bordered" />

                            </div>
                            {counter > availableItem && <p>Item you selected is Avialable</p>}
                            {counter < minPurse && <p>Follow the minimum quantity</p>}
                            <div className="form-control mt-6">
                                <button disabled={counter > availableItem || counter<minPurse} className="btn btn-warning">Purchase</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Purchases;