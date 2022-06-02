import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const navigate=useNavigate();
    const navigateToPlaceOrder=id=>{
        navigate(`/purchase/${id}`)
    }
    return (
        
        <div class="  font-serif mx-auto   card bg-slate-700 shadow-xl border-solid border-slate-900  rounded-xl border-2">
            <figure class="h-32 w-60 lg:w-72 lg:h-48 mb-2">
                <img className='h-32 w-60 lg:w-72 lg:h-48' src={tool.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="  card-body items-center text-center">
                <h2 class="card-title text-secondary text-xl font-bold">{tool.name}</h2>
                <p className=' text-white'>Price: {tool.price}  </p>
                <p className=' text-white'>Quantity:{tool.quantity}</p>
                <p className=' text-white'>Min Order Quantity: {tool.minOrderQuantity}</p>
                
                <div class="card-actions">
                    <button onClick={()=>navigateToPlaceOrder(tool._id)} class="btn btn-sm bg-gradient-to-r from-secondary to primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;