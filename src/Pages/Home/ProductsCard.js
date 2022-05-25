import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsCard = ({ product }) => {
    const { name, img, _id, description, price } = product;
    const navigation = useNavigate()
    const handleNavigate = (id) => {
        navigation(`/purchases/${id}`)

    }
    return (
        <div className="drop-shadow-xl hover:drop-shadow-2xl card w-72 p-3  mx-auto mt-11 border-none rounded-none" >
            <figure><img style={{ clipPath: 'polygon(32% 0, 100% 0, 100% 73%, 74% 100%, 38% 100%, 0 100%, 0 23%)' }} src={img} alt="" /></figure>
            <div onClick={() => handleNavigate(_id)} className=" card-actions justify-start z-20 mt-[-16px] ml-3 drop-shadow-lg">
                <button className="drop-shadow-md hover:drop-shadow-xl rounded-none btn btn-sm">Order</button>
            </div>
            <div className="">
                <div className='flex'>
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title ml-9">{price}$</h2>
                </div>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default ProductsCard;