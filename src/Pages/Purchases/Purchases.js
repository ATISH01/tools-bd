import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchases = () => {
    const [singleItem, setSingleItem] = useState([])
    const { Id } = useParams();
    const { _id, name, img, price, availableItem
        , minPurse
    } = singleItem;
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${Id}`)
            .then(res => res.json())
            .then(data => setSingleItem(data))
    }, [Id])


    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img className='lg:max-w-md max-w-sm' src={img} alt="" />
                    <p className='text-3xl'>{name}</p>

                    <p className='text-xl my-3'>Price:-<span className='border-2 border-black rounded mx-2'>  {price}$</span></p>
                    <p className='text-xl'>MinmumPurchaseQuantity:-<span className='border-2 border-black rounded mx-2'>  {minPurse}</span></p>
                    <p className='text-xl my-2'>Product You Selected</p>
                    
                </div>
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Purchases;