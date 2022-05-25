import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebse.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user]=useAuthState(auth);
    const [admin]=useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
               <Outlet></Outlet>
                

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                   
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li className={!admin?'':'hidden'}><Link to='/dashboard/review'>Review</Link></li>
                    <li className={!admin?'':'hidden'}><Link to='/dashboard/myOrders'>My Orders</Link></li>
                    <li className={admin?'':'hidden'}><Link to='/dashboard/allOrder'>Manage AllOrder</Link></li>
                    <li className={admin?'':'hidden'}><Link to='/dashboard/allUser'>Make Admin</Link></li>
                    <li className={admin?'':'hidden'}> <Link to='/dashboard/addProduct'>Add Product</Link></li>
                    <li className={admin?'':'hidden'}> <Link to='/dashboard/manageProduct'>ManageProduct</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;