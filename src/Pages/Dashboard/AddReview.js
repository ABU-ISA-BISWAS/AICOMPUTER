import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddReview.css';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
  
    const imgStorageKey ='2020a41af86572042a381fac5a0d0d99';
    const onSubmit = async data => {
        const image =data.image[0];
        const formData =new FormData();
        formData.append('image',image);
        const url =`https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{
           if(result.success){
               const img = result.data.url;
               const review = {
                   name:data.name,
                   review:data.review,
                   location:data.location,
                   ratings:data.ratings,
                   img:img
               }
               
               fetch('https://sheltered-bayou-65908.herokuapp.com/reviews',{
                   method:'POST',
                   headers:{
                       'content-type':'application/json',
                      
                   },
                   body: JSON.stringify(review)

               })
               .then(res=>res.json())
               .then(inserted=>{
                if(inserted.insertedId){
                    toast.success('Review added successfully');
                    reset();
                }
                else{
                    toast.error('Failed to add review');
                }
               })
           }
        })


    };
    return (
        <div className='addReviewContainer'>
            <div className=' mx-auto addReviewForm'>
                <p className='fw-bold fs-4 text-secondary text-xl font-bold m-5'>ADD YOUR REVIEW</p>
                <form className='d-flex flex-column animate__animated animate__zoomIn' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 10 })} />
                    <input className='mb-3' placeholder='Your review' {...register("review")} />
                    <input className='mb-3' placeholder='ratings' type="number" {...register("ratings")} />
                    <input className='mb-3' placeholder='location' type="text" {...register("location")} />
                    <input  {...register("image", {
                        required: {
                            value: true,
                            message: 'Image is Required'
                        },

                    })}
                        type="file" class="btn-sm btn-primary btn max-w-xs p-1 w-56" />
                    <input className='mx-auto w-50' id='submit' type="submit" value="Add Review" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;