import React from 'react';
import swal from 'sweetalert';

const UserRow = ({user,refetch,index}) => {
    
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
                swal("Good job!", "You clicked the button!", "warning");
            }
            return res.json()})
        .then(data=>{
            if(data.modifiedCount > 0){
                refetch();
                swal("Success!", "Admin added sucessfully!", "success");
            }
            refetch()
        })
    }
    return (
        
            <tr>
                <th>{index + 1}</th>
                <th>{email}</th>
                <td>{role!=='admin' &&  <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}
                <button  class="ml-3 btn btn-xs">Remove User</button></td>
                <td></td>
                
            </tr>
      
    );
};

export default UserRow;