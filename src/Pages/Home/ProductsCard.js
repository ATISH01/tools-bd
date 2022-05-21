import React from 'react';

const ProductsCard = ({product}) => {
    const {name,img}=product;
    return (
        <div class="card w-60  mx-auto mt-11 border-none rounded-none" >
            <figure><img style={{ clipPath: 'polygon(32% 0, 100% 0, 100% 73%, 74% 100%, 38% 100%, 0 100%, 0 23%)' }} src={img} alt="car!"/></figure>
            <div class=" card-actions justify-start z-20 mt-[-16px]">
                    <button class="rounded-none btn btn-sm">Order</button>
                </div>
            <div class="">
                <h2 class="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                
            </div>
        </div>
    );
};

export default ProductsCard;