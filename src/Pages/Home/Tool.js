import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Tool = ({ tool }) => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
    const navigate=useNavigate();
    const navigateToPlaceOrder=id=>{
        navigate(`/purchase/${id}`)
    }
    return (
        
        <div data-aos="zoom-in" class="  font-serif mx-auto   card bg-#d3fafa shadow-xl border-solid border-slate-900  rounded-xl border-2">
            <figure class="h-32 w-60 lg:w-72 lg:h-48 mb-2">
                <img className='h-32 w-60 lg:w-72 lg:h-48' src={tool.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="  card-body items-center text-center">
                <h2 class="card-title text-secondary text-xl font-bold">{tool.name}</h2>
                <p className=' '>Price: {tool.price}  </p>
                <p className=' '>Quantity:{tool.quantity}</p>
                <p className=' '>Min Order Quantity: {tool.minOrderQuantity}</p>
                
                <div class="card-actions">
                    <button onClick={()=>navigateToPlaceOrder(tool._id)} class="btn btn-sm bg-gradient-to-r from-secondary to primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;