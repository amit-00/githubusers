import React from 'react';
import UserItem from './UserItem';
import Spinner from '../utility/Spinner';


const Users = ({ users, loading }) => {
    if(loading){
        return <Spinner />
    }
    else{
        return (
            <div className='grid'>
                {users.map(user => <UserItem key={user.id} user={user} />)}
            </div>
        )
    }
    
}


export default Users;
