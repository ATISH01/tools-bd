import React from 'react';
import { useQuery } from 'react-query';

import UserRow from './UserRow';

const AllUser = () => {
    const { data: users, isLoading ,refetch} = useQuery('order', () => fetch('http://localhost:5000/user',{
        method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
    })
        .then(res => res.json()))
    if (isLoading) {
        return;
    }
   
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=><UserRow user={user} index={index} refetch={refetch}></UserRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;