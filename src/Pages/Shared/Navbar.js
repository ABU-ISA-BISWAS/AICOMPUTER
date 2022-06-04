import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Navbar.css';
import ai from '../../assets/images/ai.svg';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
      };
      const menuItems1 = <>
      <li className='lg:text-blue-300'><Link to="/">Home</Link></li>
      <li className='lg:text-blue-300'><Link to="/blogs">Blogs</Link></li>
      <li className='lg:text-blue-300'><Link to="/portfolio">My Portfolio</Link></li>
      {
            user && <li className='lg:text-yellow-300'><Link to='/dashboard'>DashBoard</Link></li>
        }
       
     
  </>
    const menuItems = <>
       
        
        <li className='text-white '>{user?<button onClick={logout} className="btn btn-outline text-red-500">SignOut</button>: <Link className='btn btn-outline  btn-primary' to="/login">Login</Link>}</li>
    </>
    return (
        <div className="navbar font-serif bg-slate-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="text-white bg-slate-700 menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                    {menuItems1}
                    </ul>
                </div>
               
                <Link className='' to="/"><span><img className='' src={ai} alt="" /></span></Link>
                <span className='ai normal-case lg:text-2xl text-white'>COMPUTER</span>
            </div>
            <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                    {menuItems1}
                </ul>
            </div>
            <div className="navbar-end">
            <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            <label tabindex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
           
            </div>
        </div>
    );
};

export default Navbar;