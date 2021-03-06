import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import auth from '../../firebse.init';


const MyOrders = () => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    /* const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://shrouded-sierra-24769.herokuapp.com/orders')
    .then(res => res.json())); */
    const [orders, setOrders] = useState([])

    useEffect(() => {

        const getMyOrders = async () => {
            const email = user.email;
            fetch(`https://shrouded-sierra-24769.herokuapp.com/orders?email=${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        navigate('/')
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                    }

                    return res.json()
                })
                .then(data => setOrders(data))
        }
        getMyOrders()
    }, [user])

    /* if(isLoading){
        return;
    } */
    console.log(orders);
    const CancelItem = id => {
        // confirmation alert 
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `https://shrouded-sierra-24769.herokuapp.com/orders/${id}`;
                    fetch(url, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            swal("Deleted!", {
                                icon: "success",
                            })
                            const remain = orders.filter(items => items._id !== id);
                            setOrders(remain)

                        })
                } else {
                    swal("Your data file is safe!");
                }
            });



    }
    console.log(orders);
    return (
        <div>
            <h2>Apointment:{orders?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time Color</th>
                            <th>Treatment</th>
                            <th>Order Status</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((a, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{a.itemName}</td>
                                <td>{a.customerName}</td>
                                <td>{a.email}</td>
                                <td>{a.phone}</td>
                                <td>
                                    <button disabled={a.paid} onClick={() => CancelItem(a._id)} className='btn btn-xs btn-error mr-2 '>Cancel</button>
                                    
                                
                                </td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <span className='text-success'>Paid</span>
                                    }
                                </td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;