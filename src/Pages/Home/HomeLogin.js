import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';
import Aos from 'aos';
import 'aos/dist/aos.css';

const HomeLogin = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);
  
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
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    // if(user){
    //     navigate(from,{replace:true});
    // }

    if (loading || sending) {
        return <Loading></Loading>
    }
    let signInError;
    if (error  || passResetError) {
        signInError = <p className='text-red-500'>{error?.message }</p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);

    };
    const resetPassword = async () => {
        const email = getValues("email");
        console.log(email);

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sending password reset email');
        }
        else {
            toast('Please enter your email address');
        };

    }

    return (
        <div data-aos="zoom-in" className=' font-serif flex  h-screen justify-center items-center'>
            
        <div class="card w-72 lg:w-80 m-5 bg-base-100 shadow-xl animate__animated animate__zoomIn">
            <div class="card-body">
                <h2 class="text-left text-3xl font-bold text-primary">Please Login</h2>

                <form onSubmit={handleSubmit(onSubmit)} >

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
                    

                        {signInError}
                    <input className='btn btn-sm w-full text-white font-bold bg-primary max-w-xs mb-5' type="submit" value="Login" />
                    <p>Forgotten password? <button onClick={resetPassword} className="text-red-500">Reset Password</button></p>
                </form>
                
                <p>New to Computer Point? <Link className='text-secondary' to="/signup">Create new account</Link></p>

            </div>
            <ToastContainer></ToastContainer>
        </div>
       
    </div>
    );
};

export default HomeLogin;