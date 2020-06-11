import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user:{ login, avatar_url }}) => {

    return (
        <div className="card shadow-sm">
            <div style={{margin: 'auto', textAlign:'center', padding:'1rem 0'}} className="container">
                <img style={{width: '70px', height: '70px', borderRadius: '50%'}} src={avatar_url} alt='img' />
                <h4>{login}</h4>
                <Link to={`/user/${login}`} className="btn btn-dark">More</Link>
                
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;
