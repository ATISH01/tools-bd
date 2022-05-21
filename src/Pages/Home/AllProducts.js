import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const AllProducts = () => {
    const[products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data.slice(0,6)))
    },[])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-1 px-12 mx-auto'>
            
            {
                products.map(product=>
                <ProductsCard product={product}></ProductsCard>)
            }
        </div>
    );
};

export default AllProducts;