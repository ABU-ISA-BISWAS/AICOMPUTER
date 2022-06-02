import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlaceOrderModal from './PlaceOrderModal';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    const [order, setOrder] = useState({});

    useEffect(() => {
        const url = `https://sheltered-bayou-65908.herokuapp.com/tools/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [id]);
    return (
        <div className='bg-slate-800 w-11/12 lg:w-8/12 mt-10 mx-auto font-serif shadow-xl border-solid border-slate-900  rounded-xl border-2 '>
            <div class="card lg:card-side bg-base-100 shadow-xl ">
                <figure className='lg:w-full'><img src={tool.img} alt="" /></figure>
                <div class=" card-body text-left">
                    <h2 className='text-xl font-bold text-secondary'>{tool.name}</h2>
                    <h2 className='text-primary'>Price per unit: ${tool.price}</h2>
                    <h2 className='text-primary'>Quantity: {tool.quantity}</h2>
                    <h2 className='text-primary '>Minimun Order Quantity: {tool.minOrderQuantity}</h2>
                    <h2 className=''> {tool.description}</h2>

                    <div class="card-actions justify-center">
                        <label htmlFor="order-modal"
                            onClick={() => setOrder(tool)}
                            class="btn bg-gradient-to-r from-secondary to primary text-white uppercase">Place Order</label>
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