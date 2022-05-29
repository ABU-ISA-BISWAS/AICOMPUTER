import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const navigate=useNavigate();
    const navigateToPlaceOrder=id=>{
        navigate(`/purchase/${id}`)
    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={tool.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-secondary text-xl font-bold">{tool.name}</h2>
                <p>Price: {tool.price}</p>
                <p>Quantity: {tool.quantity}</p>
                <p>Minimum Order Quantity: {tool.minOrderQuantity}</p>
                <p>{tool.description}</p>
                <div class="card-actions">
                    <button onClick={()=>navigateToPlaceOrder(tool._id)} class="btn bg-gradient-to-r from-secondary to primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;