import React from 'react';

const UserRow = ({user,refetch}) => {
    
    const {email,role}=user;
    const makeAdmin =()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            if(res.status === 403){
                alert('Failed')
            }
            return res.json()})
        .then(data=>{
            if(data.modifiedCount > 0){
                refetch();
                alert('Success');
            }
            refetch()
        })
    }
    return (
        
            <tr>
                <th>{email}</th>
                <td>{role!=='admin' &&  <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
                <td><button class="btn btn-xs">Remove User</button></td>
                
            </tr>
      
    );
};

export default UserRow;