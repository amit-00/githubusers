import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_USERS, GET_USER, CLEAR_USERS, GET_REPOS, SET_LOADING } from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    let githubClientId;
    let githubClientSecret;

    if(process.env.NODE_ENV !== 'production'){
        githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
        githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    }
    else{
        githubClientId = process.env.GITHUB_CLIENT_ID;
        githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //search users
    const searchUsers = async text =>{
        setLoading();
    
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}client_secret=${githubClientSecret}`);
    
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })

        // setShowClear(true);
      }

    //get user
    const getUser = async login => {
        setLoading();
    
        const res = await axios.get(`https://api.github.com/users/${login}?client_id=${githubClientId}client_secret=${githubClientSecret}`);
    
        dispatch({
            type: GET_USER,
            payload: res.data
        })
      }

    //get repos
    const getRepos = async login => {
        setLoading();
    
        const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}client_secret=${githubClientSecret}`);
    
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
      }

    //clear users
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    //set loading
    const setLoading = () => dispatch({ type: SET_LOADING });
    
    

    return (
        <GithubContext.Provider value= {{ users: state.users, user: state.user, repos: state.repos, loading: state.loading, searchUsers, getUser, clearUsers, getRepos }} >
            
            {props.children}

        </GithubContext.Provider>
    )
}

export default GithubState;
