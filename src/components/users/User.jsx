import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../utility/Spinner';
import { Link } from 'react-router-dom';
import Repos from './Repos';
import GithubContext from '../../context/github/githubContext';
import './user-css/user.css';


const User = ({ match }) => {
    const githubContext = useContext(GithubContext);

    const { user, loading, getUser, repos, getRepos } = githubContext;
    const { name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = user;

    useEffect(() => {
        getUser(match.params.login);
        getRepos(match.params.login);
        //eslint-disable-next-line
    }, []);
    

    if(loading){
        return(
            <Fragment>
                <Spinner />
            </Fragment>
        )
    }

    return (
        <div className="container vert-margin" >
            <Link to="/" className="btn btn-primary">Back to Search</Link>
            <div className="row">
                <div className="card col-md-4 shadow-sm space vert-margin bg-dark">
                    <div className="text-center text-light">
                        <img className='proflie-pic' src={avatar_url} alt="proflie pic"/>
                        <h3 className='vert-margin' >{name}</h3>
                        <p>Location: {location} </p>
                    </div>
                </div>
                <div className="card col-md-8 shadow-sm space vert-margin">
                    <h3>Bio</h3>
                    <p>{bio}</p>
                    <p>Hireable: {hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />}</p>
                    <a href={html_url} className="btn btn-info">Visit Github</a>

                    <ul style={{listStyle:'none', marginTop:'1rem'}}>
                        <li>
                            <Fragment>
                                <strong>Username: </strong> {login}
                            </Fragment>
                        </li>
                        <li>
                            <Fragment>
                                <strong>Company: </strong> {company}
                            </Fragment>
                        </li>
                        <li>
                            <Fragment>
                                <strong>Website: </strong> {blog}
                            </Fragment>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card shadow-sm vert-margin text-center">
                <div className="row space">
                    <div className="col-sm">
                        <div style={increaseSize} className="badge vert-margin badge-info">Followers: {followers}</div>
                    </div>
                    <div className="col-sm">
                        <div style={increaseSize} className="badge vert-margin badge-info">Following: {following}</div>
                    </div>
                    <div className="col-sm">
                        <div style={increaseSize} className="badge vert-margin badge-info">Public Repos: {public_repos}</div>
                    </div>
                    <div className="col-sm">
                        <div style={increaseSize} className="badge vert-margin badge-info">Public Gists: {public_gists}</div>
                    </div>
                </div>
            </div>

            <Repos repos={repos} />
        </div>
    )
}

const increaseSize = {
    fontSize: '1.4em'
}


export default User
