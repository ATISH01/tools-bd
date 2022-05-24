import React from 'react';
import swal from 'sweetalert';
import useAllProducts from '../../Hooks/useAllProducts';

const AddProduct = () => {
    const [products,setProducts]=useAllProducts()
    const deleteItem = id => {
        // confirmation alert 
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `http://localhost:5000/tools/${id}`;
                    fetch(url, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            swal("Deleted!", {
                                icon: "success",
                            })
                            const remain = products.filter(items => items._id !== id);
                            setProducts(remain)

                        })
                } else {
                    swal("Your data file is safe!");
                }
            });



    }
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
                            <td><button onClick={()=>deleteItem(product._id)} class="btn btn-xs btn-error">Delete</button></td>
                        </tr>)
                    }

                    
                    
                </tbody>
            </table>
        </div>
    );
};

export default AddProduct;