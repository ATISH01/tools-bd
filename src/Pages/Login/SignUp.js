import React from 'react';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebse.init';


const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uperror] = useUpdateProfile(auth);
    
    const formSchema = Yup.object().shape({
        email: Yup.string().email().required('Input Valid Email'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;

    const onSubmit = async userData => {
        console.log(userData);
        await createUserWithEmailAndPassword(userData.email, userData.password);
        await updateProfile({ displayName: userData.name });
    }
    
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="text-center text-2xl font-bold">SignUp</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5">
                            <input {...register("name", { required: true })} type="text" placeholder="Email" class="input input-bordered input-accent w-full max-w-xs" />
                            <div>
                                <input {...register("email", { required: true })} type="text" placeholder="Email" class="input input-bordered input-accent w-full max-w-xs" />
                                <p><small>{errors.email?.message}</small></p>
                            </div>
                            <input  {...register("password", { required: true })} type="text" placeholder="Password" class="input input-bordered input-accent w-full max-w-xs" />
                            
                            <input  {...register("confirmPassword", { required: true })} type="text" placeholder="ConfirmPassword" class="input input-bordered input-accent w-full max-w-xs" />

                            <button class="btn btn-outline" type="submit">Sign In</button>
                        </form>
                        <p>New to doctors portal? <Link to='/login'>Already have an account?</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;