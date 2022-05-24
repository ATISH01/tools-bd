import React from 'react';
import useAllProducts from '../../Hooks/useAllProducts';

const AddProduct = () => {
    const [products]=useAllProducts()
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Remove Product</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map(product=><tr product={product}>
                            <th>1</th>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button class="btn btn-xs btn-error">Delete</button></td>
                        </tr>)
                    }

                    
                    
                </tbody>
            </table>
        </div>
    );
};

export default AddProduct;