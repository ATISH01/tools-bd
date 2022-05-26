import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState } = useForm()
    const { errors } = formState;
    const onSubmit = async userData => {
        console.log(userData);
        const url = 'https://shrouded-sierra-24769.herokuapp.com/tools';

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
            <h1 className="text-2xl my-10 font-bold">Provide information to confirm Your Order</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card  w-full shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input {...register("price", { required: true })} type="text" placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Item</span>
                        </label>
                        <input {...register("availableItem", { required: true })} type="text" placeholder="Available Item" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input  {...register("quentity", { required: true })} type="text" placeholder="Quantity" className="input input-bordered input-accent w-full" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Minimum Purse</span>
                        </label>
                        <input {...register("minPurse", { required: true })} type="text" placeholder="Minimum Purse" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Link</span>
                        </label>
                        <input {...register("img", { required: true })} type="text" placeholder="Minimum Purse" className="input input-bordered" />

                    </div>
                    <div className="w-62 mt-6">
                        <button className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;