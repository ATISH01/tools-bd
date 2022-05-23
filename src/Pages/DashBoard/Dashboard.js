import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebse.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user]=useAuthState(auth);
    const [admin]=useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
               <Outlet></Outlet>
                

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                   
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li>{!admin&&<Link to='/dashboard/review'>Review</Link>}</li>
                    <li>{!admin&&<Link to='/dashboard/myOrders'>My Orders</Link>}</li>
                    <li>{admin && <Link to='/dashboard/allOrder'>Manage AllOrder</Link>}</li>
                    <li>{admin && <Link to='/dashboard/allUser'>Make Admin</Link>}</li>
                    <li>{admin && <Link to='/dashboard/addProduct'>Add Product</Link>}</li>
                    <li>{admin && <Link to='/dashboard/manageProduct'>ManageProduct</Link>}</li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;