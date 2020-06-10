import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUser: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please Enter Something');
        }
        else{
            this.props.searchUser(this.state.text);
            this.setState({text: ''});
        } 
    };

    render() {
        const {clearUsers, showClear} = this.props;

        return (
            <div style={{margin: '1rem 0'}} className="container">
                <form onSubmit={this.onSubmit} >
                    <input className="col-lg" type="text" name="text" value={this.state.text} onChange={this.onChange} placeholder="Search Github User..."/>
                    <input className="btn btn-primary col-lg text-center" type="submit" value="Search"/>
                </form>
                {showClear && <button onClick={clearUsers} className="btn btn-dark text-center col-lg">Clear</button>}
            </div>
            
        )
    }
}


export default Search

