import React from 'react';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import auth from '../../firebse.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useToken from '../../Hooks/useToken';



const Login = () => {
    
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        euser,
        eloading,
        eerror,
      ] = useSignInWithEmailAndPassword(auth);
     const[token]=useToken(euser || guser) 
    const formSchema = Yup.object().shape({
        email: Yup.string().email().required('Input Valid Email'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;

    const onSubmit =  userData => {
       
        signInWithEmailAndPassword(userData.email,userData.password);
        console.log(userData);
        
        
    }
    const location = useLocation();
    const from = location?.state?.from.pathname || '/';
    if(token){
        navigate(from, { replace: true })
    }
    
    
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5">
                        <div>
                        <input {...register("email", { required: true })} type="text" placeholder="Email" class="input input-bordered input-accent w-full max-w-xs" />
                        <p><small>{errors.email?.message}</small></p>
                        </div>
                        <input  {...register("password", { required: true })} type="text" placeholder="Password" class="input input-bordered input-accent w-full max-w-xs" />
                        <p>{eerror?.message && 'Invalid Email or Password'}</p>
                        <button class="btn btn-outline"  type="submit">Login</button>
                    </form>
                    <p>New to doctors portal? <Link to='/signup'>Create new account</Link></p>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline">With Google</button>


                </div>
            </div>
        </div>
    );
};

export default Login;