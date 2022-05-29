import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
  const [user] =useAuthState(auth);
  const [admin]=useAdmin(user);
    return (
        <div class="drawer drawer-mobile font-serif">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
          {/* <!-- Page content here --> */}
          <h2 className='text-4xl text-purple-700 mt-5'>Welcome to your DashBoard</h2>
          <Outlet></Outlet>
          
        
        </div> 
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {
              !admin && 
             
             <>
              <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard/review'>Add Review</Link></li>
            <li><Link to='/dashboard/profile'>My Profile</Link></li>
             </>
            }
            
            {admin && <>
              <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
              <li><Link to='/dashboard/manageOrder'>Manage Orders</Link></li>
              <li><Link to='/dashboard/manageProduct'>Manage Products</Link></li>
              <li><Link to='/dashboard/allUsers'>All Users</Link></li>
              </>}
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;