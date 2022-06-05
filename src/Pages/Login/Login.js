import React, { useEffect,useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, passResetError] = useSendPasswordResetEmail(
        auth
      );
      const [token]= useToken(user || gUser);
      const navigate =useNavigate();
    //   const location =useLocation();
    //   let from =location.state?.from?.pathname || "/";
     
        if (token) {
            navigate('/dashboard'); 
         }
     

    
    if(loading || gLoading ||sending){
        return <Loading></Loading>
    }
    let signInError;
    if(error || gError||passResetError){
        signInError = <p className='text-red-500'>{error?.message || gError?.message}</p>
    }

    const onSubmit = data => {
        
        signInWithEmailAndPassword(data.email, data.password);    

    };
    const resetPassword = async () => {
        const email = getValues("email");
        
      
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sending password reset email');
        }
        else {
            toast('Please enter your email address');
        };

    }
   
    return (
        <div className=' font-serif flex  h-screen justify-center items-center'>
            
            <div class="card w-96 m-5 bg-base-100 shadow-xl animate__animated animate__zoomIn">
                <div class="card-body">
                    <h2 class="text-center text-3xl font-bold text-primary">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>

                            <input 
                           
                            
                            
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a Valid Email'
                                }
                            })}
                                type="email" placeholder="Your Email" class="input bg-slate-200 input-sm input-bordered w-full max-w-xs" />


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
                                type="password" placeholder="Password" class="input bg-slate-200 input-sm input-bordered w-full max-w-xs" />


                            <label class="label">
                                {errors.password?.type ==='required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type ==='minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>

                        </div>
                        

                            {signInError}
                        <input className='btn btn-sm w-full text-white font-bold bg-primary max-w-xs mb-5' type="submit" value="Login" />
                        <p>Forgotten password? <button onClick={resetPassword} className="text-red-500">Reset Password</button></p>
                    </form>
                    
                    <p>New to AI Computer? <Link className='text-secondary' to="/signup">Create new account</Link></p>

                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()}
                        class="btn btn-sm btn-outline btn-primary">Continue With Google</button>
                </div>
                <ToastContainer></ToastContainer>
            </div>
           
        </div>
    );
};

export default Login;
