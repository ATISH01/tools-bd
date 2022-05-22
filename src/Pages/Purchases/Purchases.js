import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

const Purchases = () => {
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
            .then(data => setSingleItem(data))
    }, [Id])

    const minus = (ID) => {
        setPlusError('')

        const i = singleItem.selected--;
        console.log(i);
        if (i > 40) {
            console.log(`{id:${i}}`);
            console.log(singleItem);

            const url = `http://localhost:5000/tools/${ID}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(singleItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    setSingleItem({ ...singleItem, selected: singleItem.selected })
                })
        }
        else {
            setMinusError('Follow the minimum order')
            return;
        }
    }

    const plus = (ID) => {
        setMinusError('');
        console.log('clicked');
        const i = singleItem.selected++;
        const max = availableItem;
        console.log(max);
        if (i < max) {
            console.log(`{id:${i}}`);


            const url = `http://localhost:5000/tools/${ID}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(singleItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    setSingleItem({ ...singleItem, selected: singleItem.selected })
                })
        }
        else {
            setPlusError('You can not select more then available');
            return;
        };
    }
    /* const [input, setInput] = useState(0)
    const inputValue = e => {
        setInput(e.target.value);
        console.log(input); */




    return (
        <div class="hero min-h-screen bg-base-200 ">
            <div class=" hero-content flex-col lg:flex-row-reverse gap-11">
                <div className=''>
                    <img className='lg:max-w-md max-w-sm' src={img} alt="" />
                    <p className='text-3xl'>{name}</p>

                    <p className='text-xl my-3'>Price:-<span className='border-2 border-black rounded mx-2'>  {price}$</span></p>
                    <p className='text-xl my-3'>Avialable:-<span className='border-2 border-black rounded mx-2'>  {availableItem}</span></p>
                    <p className='text-xl'>MinmumPurchaseQuantity:-<span className='border-2 border-black rounded mx-2'>  {minPurse}</span></p>
                    <p className='text-xl my-2'>Product You Selected:<span className='border-2 border-black rounded mx-2'>  {selected} </span></p>
                    <div>

                        <div class="input-group number-spinner">
                            <button disabled={minusError} onClick={() => minus(_id)} class="btn btn-default text-2xl">-</button>
                            {/* <input  min={minPurse} class="form-control text-center" /> */}
                            <button disabled={plusError} onClick={() => plus(_id)} class="btn btn-default text-2xl">+</button>

                        </div>
                        <p>{plusError}</p>
                        <p>{minusError}</p>
                    </div>
                </div>
                <div >
                    <h1 class="text-2xl my-10 font-bold">Provide information to confirm Your Order</h1>
                    <div class="card  w-full shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="Phone" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="address" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Purchase</button>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Purchases;