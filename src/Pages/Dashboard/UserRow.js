import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UserRow = ({userd,index,refetch}) => {
    const [user] = useAuthState(auth);
    const {email,role}=userd;
    const makeAdmin =()=>{
        fetch(`https://https://sheltered-bayou-65908.herokuapp.com/user/admin/${email}`,{
        method:'PUT',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res=>{
        if(res.status ===403){
            toast.error('Failed to make an admin');
        }
        return res.json()})
    .then(data=>{
        if(data.modifiedCount >0){
            refetch();
        toast.success(`Successfully made an admin`);
        }
    })
    }
    return (
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
        <td>{user.displayName}</td>
        <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
      </tr>
    );
};

export default UserRow;