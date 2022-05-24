import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState } = useForm()
    const { errors } = formState;
    const onSubmit = async userData => {
        console.log(userData);
        const url = 'http://localhost:5000/tools';

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
                swal("Done!", "Item Successfully Added!", "success");
            })
 
    }
    return (
        <div className='p-6'>
            <h1 class="text-2xl my-10 font-bold">Provide information to confirm Your Order</h1>
            <form onSubmit={handleSubmit(onSubmit)} class="card  w-full shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Item Name</span>
                        </label>
                        <input {...register("name")} type="text" placeholder="Name" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Price</span>
                        </label>
                        <input {...register("price", { required: true })} type="text" placeholder="Price" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Available Item</span>
                        </label>
                        <input {...register("availableItem", { required: true })} type="text" placeholder="Available Item" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Quantity</span>
                        </label>
                        <input  {...register("quentity", { required: true })} type="text" placeholder="Quantity" class="input input-bordered input-accent w-full" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Minimum Purse</span>
                        </label>
                        <input {...register("minPurse", { required: true })} type="text" placeholder="Minimum Purse" class="input input-bordered" />

                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Image Link</span>
                        </label>
                        <input {...register("img", { required: true })} type="text" placeholder="Minimum Purse" class="input input-bordered" />

                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;