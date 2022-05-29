import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
      };
    const menuItems = <>
        <li className='text-white'><Link to="/">Home</Link></li>
        <li className='text-white'><Link to="/appointment">Appointment</Link></li>
        <li className='text-white'><Link to="/review">Review</Link></li>
        <li className='text-white'><Link to="/contact">Contact</Link></li>
        <li className='text-white'><Link to="/about">About</Link></li>
        {
            user && <li className='text-white'><Link to='/dashboard'>DashBoard</Link></li>
        }
        {
            user && <li className='mt-2 mx-2 uppercase text-xl font-bold text-green-200'>{user.displayName}</li>
        }
        
        <li className='text-white'>{user?<button onClick={logout} class="btn text-red-900 btn-ghost">SignOut</button>: <Link to="/login">Login</Link>}</li>
    </>
    return (
        <div className="navbar font-serif bg-blue-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl text-green-900 ">COMPUTER POINT</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
            <label tabindex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
           
            </div>
        </div>
    );
};

export default Navbar;