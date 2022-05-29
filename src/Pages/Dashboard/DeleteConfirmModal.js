import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ cancelOrder, refetch, setCancelOrder }) => {
    const { tool, _id } = cancelOrder;
    const handleDelete = (tool, id) => {
        console.log(id)
        fetch(`http://localhost:5000/order/${id}`, {
            method: 'DELETE',
            headers: {

                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor:${tool} is deleted.`)
                    setCancelOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>




            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-red-500 text-lg">Are yo sure you want to delete {tool}!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                        <button onClick={() => handleDelete(cancelOrder.tool, _id
                        )} class="btn btn-error btn-xs">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;