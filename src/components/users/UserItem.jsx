import React from 'react'
import PropTypes from 'prop-types'


const UserItem = ({user:{login, avatar_url, html_url}}) => {
    return (
        <div className="card shadow-sm">
            <div style={{margin: 'auto', textAlign:'center', padding:'1rem 0'}} className="container">
                <img style={{width: '70px', height: '70px', borderRadius: '50%'}} src={avatar_url} />
                <h4>{login}</h4>
                <a href={html_url} className="btn btn-dark">More</a>
            </div>
        </div>
    )
}

const propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem;
