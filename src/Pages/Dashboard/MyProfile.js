import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const updateProfile =()=>{
        fetch(`https://http://localhost:5000/user/${user.email}`,{
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
            
        toast.success(`Successfully made an admin`);
        }
    })
    }
    return (
        <div className='mt-5'>
            <div class="avatar online">
                <div class="w-24 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=28212" alt='' />
                </div>
            </div>
            <p className='uppercase text-xl font-bold font-serif text-secondary'>{user.displayName}</p>
            <p className='text-primary'>{user.email}</p>
            <button onClick={updateProfile} class="btn btn-xs">Update Profile</button>
        </div>
    );
};

export default MyProfile;