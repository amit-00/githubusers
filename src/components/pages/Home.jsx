import React, { Fragment } from 'react';
import Users from '../users/Users';
import Search from '../users/Search';
import Alert from '../utility/Alert';

const Home = () => {
    return (
        <Fragment>
            <Alert />
            <Search />
            <Users />
        </Fragment>
    )
}

export default Home
