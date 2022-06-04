import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const DeleteConfirmModal = ({ cancelOrder, refetch, setCancelOrder }) => {
    const { tool, _id } = cancelOrder;
   
    const handleDelete = ( id) => {

        fetch(`https://sheltered-bayou-65908.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {

                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`This Order has canceled.`);
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

                    <div class="modal-action">
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                        <button onClick={() => handleDelete( _id
                        )} class="btn btn-error btn-xs">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;