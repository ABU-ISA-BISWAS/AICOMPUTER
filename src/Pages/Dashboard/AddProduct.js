import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
   
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
  
    const imgStorageKey ='2020a41af86572042a381fac5a0d0d99';
    const onSubmit = async data => {
        const image =data.img[0];
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
                   const product = {
                       name:data.name,
                       price:data.price,
                       minOrderQuantity:data.minOrderQuantity,
                       quantity:data.quantity,
                       description:data.description,
                       img:img
                   }
                   
                   fetch('http://localhost:5000/tools',{
                       method:'POST',
                       headers:{
                           'content-type':'application/json',
                          
                       },
                       body: JSON.stringify(product)
    
                   })
                   .then(res=>res.json())
                   .then(inserted=>{
                    if(inserted.insertedId){
                        toast.success('product added successfully');
                        reset();
                        console.log('inserted')
                    }
                    else{
                        toast.error('Failed to add product');
                    }
                   })
               }
            })
    
    
        };
        return (
            <div className='addReviewContainer'>
                <div className=' mx-auto addReviewForm'>
                    <p className='fw-bold fs-4 text-secondary text-xl font-bold mt-5'>ADD A PRODUCT</p>
                    <form className='d-flex flex-column animate__animated animate__zoomIn' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-3' placeholder='Product Name' {...register("name", { required: true, maxLength: 10 })} />
                        <input className='mb-3' placeholder='Price' type="number" {...register("price")} />
                        <input className='mb-3' placeholder='Minimum Order Quantity' type="number" {...register("minOrderQuantity")} />
                        <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
                        <textarea className='mb-3' placeholder='Description' {...register("description")} />
                        <input  {...register("img", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            },
    
                        })}
                            type="file" class="input input-bordered w-full max-w-xs" />
                        <input className='mx-auto w-50' id='submit' type="submit" value="Add Product" />
                    </form>
                </div>
            </div>
        );
};

export default AddProduct;