import React from 'react';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebse.init';
import useToken from '../../Hooks/useToken';


const Signup = () => {
    const navigate=useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });
    
    const [updateProfile, updating, uperror] = useUpdateProfile(auth);
    const[token]=useToken(user);
    const formSchema = Yup.object().shape({
        email: Yup.string().email().required('Input Valid Email'),
        password: Yup.string()
            .required('Password is mendatory')
            .min(3, 'Password must be at 3 char long'),
        confirmPassword: Yup.string()
            .required('Password is mendatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;

    const onSubmit = async userData => {
        console.log(userData);
        await createUserWithEmailAndPassword(userData.email, userData.password);
        await updateProfile({ displayName: userData.name });

    }
  if(token){
    navigate('/')
  }
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">SignUp</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5">
                            <input {...register("name", { required: true })} type="text" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />
                            <div>
                                <input {...register("email", { required: true })} type="text" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />
                                <p><small>{errors.email?.message}</small></p>
                            </div>
                            <div>
                                <input  {...register("password", { required: true })} type="text" placeholder="Password" className="input input-bordered input-accent w-full max-w-xs"
                                />
                                <small className='text-red-500'>{errors.password?.message && "Password is required"}</small>
                            </div>
                            <input  {...register("confirmPassword", { required: true })} type="text" placeholder="ConfirmPassword" className="input input-bordered input-accent w-full max-w-xs"
                            />
                            <small className='text-red-500'>{errors.confirmPassword?.message}</small>
                            <button className="btn btn-outline" type="submit">Sign Up</button>
                        </form>
                        <p>New to doctors portal? <Link to='/login'>Already have an account? Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;