import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebse.init';

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset, formState } = useForm();
  const [datas, setDatas] = useState([]);
  const [userData, setUserData] = useState([]);
  const {email,customerName,education,phone,location}=datas;
  useEffect(() => {
    const email=(user.email);
    console.log(email);
    fetch(`http://localhost:5000/profile/${email}`, {
                method:'GET'   
            })
      .then(res => res.json())
      .then(data => setDatas(data))
  }, [])
  const onSubmit = userData => {
    console.log(userData);
    const url = `http://localhost:5000/profile/${user.email}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(result => {
        if(result.acknowledged){
          console.log('ok');
        }
        else{
          console.log('no');
        }

      })
    

  }
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl rounded-none">
        <div class="card-body">
          <h2 class="card-title">{user.displayName}</h2>
          <p>{user.email}</p>
          <p>{education}</p>
          <p>{location}</p>
          <p>{phone}</p>
        </div>
      </div>
      <div>
        <div class="mt-5 card w-96 bg-base-100 shadow-xl rounded-none">
          <div class="card-body">
            <h2 class="card-title">Add or Update your information here.</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input  {...register("customerName")}  type="text" placeholder="" class="hidden input input-bordered input-secondary w-full max-w-xs rounded-none" /><input  {...register("email")} type="text"  placeholder="" class="  hidden input input-bordered input-secondary w-full max-w-xs rounded-none" />
              <label htmlFor="">Education</label>
              <input   {...register("education")} required type="text" placeholder="" class="input input-bordered input-secondary w-full max-w-xs rounded-none" />
              <label htmlFor="">Location/City</label>
              <input  {...register("location")} required type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs rounded-none" />
              <label htmlFor="">Phone</label>
              <input  {...register("phone")} required type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs rounded-none" />
              <label htmlFor="">LinkDin</label>
              <input {...register("linkdin")} required type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-xs rounded-none" />
              <button className='btn btn-secondary mt-3' type='submit'>Submit</button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MyProfile;