import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

import { useParams } from 'react-router-dom';
import auth from '../../firebse.init';

const Purchases = () => {
    const [counter, setCounter] = useState(0);
    const [iname, setItem] = useState(0);

    const [user] = useAuthState(auth);
    const [plusError, setPlusError] = useState('');

    const [minusError, setMinusError] = useState('');

    const [singleItem, setSingleItem] = useState([])
    const { Id } = useParams();
    const { _id, name, img, price, availableItem
        , minPurse, selected
    } = singleItem;
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${Id}`)
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
        const url = 'http://localhost:5000/orders';

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
        <div class="hero min-h-screen bg-base-200 ">
            <div class=" hero-content flex-col lg:flex-row-reverse gap-11">
                <div className=''>
                    <img className='lg:max-w-md max-w-sm' src={img} alt="" />
                    <p className='text-3xl'>{name}</p>

                    <p className='text-xl my-3'>Price:-<span className='border-2 border-black rounded mx-2'>  {price}$</span></p>
                    <p className='text-xl my-3'>Avialable:-<span className='border-2 border-black rounded mx-2'>  {availableItem}</span></p>
                    <p className='text-xl'>MinmumPurchaseQuantity:-<span className='border-2 border-black rounded mx-2'>  {minPurse}</span></p>
                    {/* <p className='text-xl my-2'>Product You Selected:<span className='border-2 border-black rounded mx-2'>  {selected} </span></p> */}
                    <div>

                        <div class="input-group number-spinner">
                            <button disabled={minusError} onClick={decrease} class="btn btn-default text-2xl">-</button>
                            <input onChange={changeValue} value={counter} class="form-control text-center" />
                            <button disabled={plusError} onClick={increase} class="btn btn-default text-2xl">+</button>
                            <p>{plusError}</p>
                            <p>{minusError}</p>
                        </div>

                    </div>
                </div>
                <div >
                    <h1 class="text-2xl my-10 font-bold">Provide information to confirm Your Order</h1>
                    <form onSubmit={handleSubmit(onSubmit)} class="card  w-full shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Item Name</span>
                                </label>
                                <input {...register("itemName")} type="text"  placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Customer Name</span>
                                </label>
                                <input {...register("customerName", { required: true })} type="text" value={user.displayName} placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} value={user.email} type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone</span>
                                </label>
                                <input  {...register("phone", { required: true })} type="text" placeholder="Phone" class="input input-bordered input-accent w-full" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="address" class="input input-bordered" />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Cart</span>
                                </label>
                                <input value={counter} {...register("cart")} type="text" placeholder="address" class="input input-bordered" />

                            </div>
                            {counter > availableItem && <p>Item you selected is Avialable</p>}
                            {counter < minPurse && <p>Follow the minimum quantity</p>}
                            <div class="form-control mt-6">
                                <button disabled={counter > availableItem} class="btn btn-primary">Purchase</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Purchases;