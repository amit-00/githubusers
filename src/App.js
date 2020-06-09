import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';


class App extends Component {
  state = {
    users: [],
    loading: false,
    showClear: false
  }

  searchUser = async text =>{
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false, showClear: true });
  }

  clearUsers = () =>{
    this.setState({users: []});
    this.setState({showClear: false});
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUser={this.searchUser} clearUsers={this.clearUsers} showClear={this.state.showClear}/>
          <Users users={this.state.users} loading={this.state.loading}/>
        </div>
      </div>
    )
  }
}

export default App;

