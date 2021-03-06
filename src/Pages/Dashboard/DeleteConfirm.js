import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({ deleteOrder, refetch, setDeleteOrder }) => {
    const { tool, _id } = deleteOrder;
    const handleDelete = (id) => {

        fetch(`https://sheltered-bayou-65908.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {

                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`This Order has deleted successfully.`)
                    setDeleteOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>




            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-red-500 text-lg">Are yo sure you want to delete!</h3>

                    <div class="modal-action">
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                        <button onClick={() => handleDelete(_id
                        )} class="btn btn-error btn-xs">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirm;