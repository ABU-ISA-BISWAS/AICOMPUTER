import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const navigate=useNavigate();
    const navigateToPlaceOrder=id=>{
        navigate(`/purchase/${id}`)
    }
    return (
        
        <div class="font-serif mx-auto font-thin card w-72  bg-base-100 shadow-xl border-solid border-cyan-100  rounded-md border-2">
            <figure class="">
                <img className='h-32 w-72' src={tool.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-secondary text-xl font-bold">{tool.name}</h2>
                <p><span className='font-bold text-secondary'>Price:</span> {tool.price}  </p>
                <p><span className='font-bold text-secondary'>Quantity:</span> {tool.quantity}</p>
                <p><span className='font-bold text-secondary'>Minimum Order Quantity:</span> {tool.minOrderQuantity}</p>
                
                <div class="card-actions">
                    <button onClick={()=>navigateToPlaceOrder(tool._id)} class="btn bg-gradient-to-r from-secondary to primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;