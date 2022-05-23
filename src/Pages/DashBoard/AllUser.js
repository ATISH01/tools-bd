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
        <div class="overflow-x-auto">
            <table class="table w-full">
                
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=><UserRow user={user} refetch={refetch}></UserRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;