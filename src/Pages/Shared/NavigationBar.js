import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebse.init';

const NavigationBar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/portfolio'>My Portfolio</Link></li>



        {
            user && <li><Link to='/dashboard'>DashBoard</Link></li>
        }
        <li>
            {user ? <Link onClick={logout} to='/'>Log out</Link> : <Link to='/login'>Login</Link>}
        </li>
        <li>
            <strong className='inline-block align-middle'>{user?.displayName}</strong>
        </li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {menu}
                    </ul>
                </div>

                <Link to='/' className="btn btn-ghost normal-case text-xl">Tools-BD</Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    {menu}
                </ul>
            </div>
            {<div className="navbar-end lg:hidden">
                <label for="my-drawer-2" tabindex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>}
        </div>
    );
};

export default NavigationBar;