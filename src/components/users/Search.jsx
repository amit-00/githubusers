import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        this.props.searchUser(this.state.text);
        this.setState({text: ''});
    };
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{margin: '1rem 0'}} className="container">
                <div className="row">
                    <input className="col-sm-11" type="text" name="text" value={this.state.text} onChange={this.onChange} placeholder="Search Github User..."/>
                    <input onSubmit={this.onSubmit} className="btn btn-primary col-sm-1" type="submit" value="Search"/>
                </div>
            </form>
        )
    }
}

export default Search

