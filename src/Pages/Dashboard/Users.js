import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data:users,isLoading,refetch}= useQuery('users',()=> fetch('https://sheltered-bayou-65908.herokuapp.com/user',{
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }

    
    return (
        <div className='mt-5'>
            <h2 className='text-xl text-primary mb-5'>{users.length} Users Available</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Name</th>
        <th>Make Admin</th>
        
      </tr>
    </thead>
    <tbody>
     
      {users.map((userd,index)=><UserRow key={userd._id} userd={userd} index={index} refetch={refetch}></UserRow>)}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;