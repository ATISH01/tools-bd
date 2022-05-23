import React from 'react';
import useAllProducts from '../../Hooks/useAllProducts';
import ProductsCard from './ProductsCard';

const AllProducts = () => {
    const[products]=useAllProducts()
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-1 px-12 mx-auto'>
            
            {
                products.slice(0,8).map(product=>
                <ProductsCard product={product}></ProductsCard>)
            }
        </div>
    );
};

export default AllProducts;