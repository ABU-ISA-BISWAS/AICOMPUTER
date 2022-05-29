import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div className='mt-5'>
            <div class="avatar online">
                <div class="w-24 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=28212" alt='' />
                </div>
            </div>
            <p className='uppercase text-xl font-bold font-serif text-secondary'>{user.displayName}</p>
            <p className='text-primary'>{user.email}</p>
        </div>
    );
};

export default MyProfile;