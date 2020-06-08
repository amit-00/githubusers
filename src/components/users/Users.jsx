import React from 'react';
import UserItem from './UserItem'
import Spinner from '../utility/Spinner'

const Users = ({users, loading}) => {
    if(loading){
        return <Spinner />
    }
    else{
        return (
            <div style={userStyle}>
                {users.map(user => <UserItem key={user.id} user={user} />)}
            </div>
        )
    }
    
}

const userStyle = {
    margin: '1rem 0',
    display:'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;
