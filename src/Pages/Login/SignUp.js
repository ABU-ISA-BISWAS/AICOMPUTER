import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [token]= useToken(user || gUser);
      const navigate =useNavigate();
    if (token) {
        navigate('/appointment');
    }
    if(loading || gLoading ||updating){
        return <Loading></Loading>
    }
    let signUpError;
    if(error || gError || updateError){
        signUpError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }

    const onSubmit =async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName:data.name });
        navigate('/appointment');

    };

    return (
        <div className='flex h-screen justify-center items-center'>
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-center text-3xl font-bold text-primary">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>

                        <input  {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            },
                           
                        })}
                            type="text" placeholder="Your Name" class="input input-sm input-bordered w-full max-w-xs" />


                        <label class="label">
                            {errors.name?.type ==='required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>

                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>

                        <input  {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a Valid Email'
                            }
                        })}
                            type="email" placeholder="Your Email" class="input input-sm input-bordered w-full max-w-xs" />


                        <label class="label">
                            {errors.email?.type ==='required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type ==='pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                        </label>

                    </div>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>

                        <input  {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is Required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })}
                            type="password" placeholder="Password" class="input input-sm input-bordered w-full max-w-xs" />


                        <label class="label">
                            {errors.password?.type ==='required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type ==='minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                        </label>

                    </div>
                    

                        {signUpError}
                    <input className='btn w-full text-white font-bold bg-primary max-w-xs mb-5' type="submit" value="SignUp" />
                </form>
                <p>Already have an account? <Link className='text-primary' to="/login">Please Login</Link></p>

                <div class="divider">OR</div>
                <button onClick={() => signInWithGoogle()}
                    class="btn btn-outline btn-primary">Continue With Google</button>
            </div>
        </div>
    </div>
    );
};

export default SignUp;