import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirm from './DeleteConfirm';
import DeleteModal from './DeleteModal';


const ManageProduct = () => {
    const [deleteTool, setDeleteTool] = useState(null);
    const { data: tools, isLoading, refetch } = useQuery('tools', () => fetch(`https://sheltered-bayou-65908.herokuapp.com/tools`)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <p className='text-secondary font-bold text-2xl my-5'>{tools.length} Product Available</p>
            <div className='w-6/12  mx-auto'>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>N</th>
                            <th>Photo</th>
                            <th>Product Nmae</th>
                            <th>Price</th>
                            <th>Quantity</th>


                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <tr>
                                <td>{index + 1}</td>
                                <td>
                                <div class="avatar">
                                    <div class="w-16 rounded">
                                        <img src={tool.img} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                </td>
                                <td>{tool.name}</td>
                                <td>{tool.price}</td>

                                <td>{tool.quantity}</td>



                                <td>
                                    <label onClick={() => setDeleteTool(tool)} for="delete-confirm-modal" class="btn modal-button btn btn-error btn-xs">Delete</label>
                                </td>


                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
            {deleteTool && <DeleteModal
                deleteTool={deleteTool}
                setDeleteTool={setDeleteTool}
                refetch={refetch}></DeleteModal>}
        </div>
    );
};

export default ManageProduct;