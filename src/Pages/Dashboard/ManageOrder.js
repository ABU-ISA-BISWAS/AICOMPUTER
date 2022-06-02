import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirm from './DeleteConfirm';


const ManageOrder = () => {
    const [deleteOrder, setDeleteOrder] = useState(null);
    const {data:orders,isLoading,refetch}=useQuery('orders',()=>fetch(`https://sheltered-bayou-65908.herokuapp.com/order`)
    .then(res=> res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    
    return (
        <div>
            <p className='text-secondary font-bold text-2xl my-5'>{orders.length} Orders</p>
            <div className='data-table w-11/12 lg:w-10/12 mx-auto overflow-x-auto'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th></th>
                            <th>Product Name</th>
                            <th>Customer Name</th>
                            <th>Ordered Quantity</th>
                            <th>Phone</th>
                            <th>Address</th>
                            
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order,index) => <tr>
                                <td>{index+1}</td>
                                <td>{order.productName}</td>
                                <td>{order.name}</td>
                                <td>{order.orderAmount}</td>
                                <td>{order.phone}</td>
                                <td>{order.address}</td>
                                
                                
                                <td>
                                    <label onClick={() => setDeleteOrder(order)} for="delete-confirm-modal" class="btn modal-button btn btn-error btn-xs">Delete</label>
                                </td>
                               

                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
            {deleteOrder && <DeleteConfirm
                deleteOrder={deleteOrder}
                setDeleteOrder={setDeleteOrder}
                refetch={refetch}></DeleteConfirm>}
        </div>
    );
};

export default ManageOrder;