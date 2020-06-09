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
            <div style={{margin: '1rem 0'}} className="container row">
                <form onSubmit={this.onSubmit} className="col-sm-11">
                    <input className="col-sm-11" type="text" name="text" value={this.state.text} onChange={this.onChange} placeholder="Search Github User..."/>
                    <input className="btn btn-primary col-sm-1" type="submit" value="Search"/>
                </form>
                {showClear && <button onClick={clearUsers} className="btn btn-dark col-sm-1">Clear</button>}
            </div>
            
        )
    }
}


export default Search

