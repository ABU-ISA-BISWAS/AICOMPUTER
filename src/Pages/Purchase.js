import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlaceOrderModal from './PlaceOrderModal';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [order, setOrder] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [id]);
    return (
        <div className='w-8/12 mt-10 mx-auto'>
            <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src={tool.img} alt="" /></figure>
                <div class="card-body text-left">
                    <h2 className='text-xl font-bold text-secondary'>{tool.name}</h2>
                    <h2 className='text-primary font-semibold'>Price per unit: ${tool.price}</h2>
                    <h2 className='text-primary font-semibold'>Quantity: {tool.quantity}</h2>
                    <h2 className='text-primary font-semibold'>Minimun Order Quantity: {tool.minOrderQuantity}</h2>
                    <h2 className='text-secondary font-semibold'> {tool.description}</h2>

                    <div class="card-actions justify-center">
                        <label htmlFor="order-modal"
                            onClick={() => setOrder(tool)}
                            class="btn btn-secondary text-white uppercase">Place Order</label>
                    </div>
                </div>
            </div>

            {
                order && <PlaceOrderModal
                    order={order}
                    setOrder={setOrder}
                ></PlaceOrderModal>
            }

        </div>
    );
};

export default Purchase;