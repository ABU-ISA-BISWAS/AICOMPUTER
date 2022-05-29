import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [cancelOrder, setCancelOrder] = useState(null);
    const { data: order, isLoading, refetch } = useQuery('order', () => fetch('http://localhost:5000/order', {
        headers: {

            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()));


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?user=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }

                    return res.json()
                })
                .then(data => {

                    setOrders(data)
                });
        }
    }, [user]);

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <p className='my-5 text-2xl text-primary font-semibold font-serif'>My Order:  {orders.length} </p>
            <div class="overflow-x-auto">
                <table class="table w-full">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.orderAmount}</td>

                                <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} ><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <p className='text-success'>Paid</p>
                                        <p>Transaction Id: <span className='text-success'>{order.transactionId}</span></p>
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
                setCancelOrder={setCancelOrder}
                refetch={refetch}></DeleteConfirmModal>}
        </div>
    );
};

export default MyOrders;