import React, {  useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';

import { Link} from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

import DeleteConfirmModal from './DeleteConfirmModal';

const MyOrders = () => {
  
    const [user] = useAuthState(auth);

    const [cancelOrder, setCancelOrder] = useState(null);
  
    const { data:orders, isLoading, refetch } = useQuery('order', () => fetch(`https://sheltered-bayou-65908.herokuapp.com/order?email=${user.email}`)
    .then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
  




    return (
        <div className=''>
            <p className='my-5 text-2xl text-primary font-semibold font-serif'>My Order:  {orders.length} </p>
            <div class="overflow-x-auto ">
                <table class="table mx-auto ">

                    <thead>
                        <tr>
                        <th className='bg-slate-800 text-white text-2xs'>N</th>
                            <th className='bg-slate-800 text-white text-2xs'>P.Name</th>
                            <th className='bg-slate-800 text-white text-2xs'>Price</th>
                            <th className='bg-slate-800 text-white text-2xs'>Quantity</th>
                            <th className='bg-slate-800 text-white text-2xs'>Payment</th>
                            <th className='bg-slate-800 text-white text-2xs'>Cancel</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                 <td>{index+1}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.orderAmount}</td>

                                

                                <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} ><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <p className='text-success'>Paid</p>
                                        {/* <p>Transaction Id: <span className='text-success'>{order.transactionId}</span></p> */}
                                    </div>}
                                </td>

                                <td>
                                    <label onClick={() => setCancelOrder(order)} for="delete-confirm-modal" class="btn modal-button btn btn-error btn-xs">Delete</label>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
            {cancelOrder && <DeleteConfirmModal
                cancelOrder={cancelOrder}
                refetch={refetch}
                setCancelOrder={setCancelOrder}
                ></DeleteConfirmModal>}
        </div>
    );
};

export default MyOrders;