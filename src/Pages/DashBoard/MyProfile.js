import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebse.init';

const MyProfile = () => {
  const [user,email] = useAuthState(auth);
  const { register, handleSubmit, reset, formState } = useForm();
  const[datas,setDatas]=useState([])
  const onSubmit = userData => {
      console.log(userData);
   const url = 'http://localhost:5000/profile';
        
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(result => {
          
            console.log(result);
            if(result.success){
              alert('done')
            }
            else{
              alert('user exists')
            }
            fetch(`http://localhost:5000/profile/${user.email}`)
            .then(res=>res.json())
            .then(data=>setDatas(data))
            
        })
        console.log(datas);

  }
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl rounded-none">
        <div class="card-body">
          <h2 class="card-title">{user.displayName}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <div>
        <div class="mt-5 card w-96 bg-base-100 shadow-xl rounded-none">
          <div class="card-body">
            <h2 class="card-title">Add or Update your information here.</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input  {...register("customerName")} value={user.displayName} type="text" placeholder="" class="hidden input input-bordered input-secondary w-full max-w-xs rounded-none" /><input  {...register("email")} type="text" value={user.email} placeholder="" class="  hidden input input-bordered input-secondary w-full max-w-xs rounded-none" />
              <label htmlFor="">Education</label>
              <input  {...register("education")} type="text" placeholder="" class="input input-bordered input-secondary w-full max-w-xs rounded-none" />
              <label htmlFor="">Location/City</label>
              <input {...register("location")} type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs rounded-none" />
              <label htmlFor="">Phone</label>
              <input {...register("phone")} type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs rounded-none" />
              <label htmlFor="">LinkDin</label>
              <input {...register("linkdin")} type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs rounded-none" />
              <button className='btn btn-secondary mt-3' type='submit'>Submit</button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MyProfile;