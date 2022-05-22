import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsCard = ({product}) => {
    const {name,img,_id}=product;
    const navigation = useNavigate()
    const handleNavigate = (id) => {
        navigation(`/purchases/${id}`)

    }
    return (
        <div class="drop-shadow-xl hover:drop-shadow-2xl card w-72 p-3  mx-auto mt-11 border-none rounded-none" >
            <figure><img   style={{ clipPath: 'polygon(32% 0, 100% 0, 100% 73%, 74% 100%, 38% 100%, 0 100%, 0 23%)' }} src={img} alt="car!"/></figure>
            <div onClick={() => handleNavigate(_id)} class=" card-actions justify-start z-20 mt-[-16px] ml-3 drop-shadow-lg">
                    <button class="drop-shadow-md hover:drop-shadow-xl rounded-none btn btn-sm">Order</button>
                </div>
            <div class="">
                <h2 class="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                
            </div>
        </div>
    );
};

export default ProductsCard;