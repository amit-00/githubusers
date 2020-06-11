import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';


const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const { setAlert, removeAlert } = alertContext;
    const { users, searchUsers, clearUsers } = githubContext;

    const [text, setText] = useState('');

    const onChange = e => setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if(text === ''){
            setAlert('Please Enter Something');
        }
        else{
            removeAlert();
            searchUsers(text);
            setText('');
        } 
    };

    return (
        <div className='vert-margin'>
            <form onSubmit={onSubmit} >
                <input className="col-lg" type="text" name="text" value={text} onChange={onChange} placeholder="Search Github User..."/>
                <input className="btn btn-primary col-lg text-center" type="submit" value="Search"/>
            </form>
            {users.length > 0 && <button onClick={clearUsers} className="btn btn-dark text-center col-lg">Clear</button>}
        </div>
        
    )
}



export default Search

