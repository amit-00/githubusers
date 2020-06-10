import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/nav/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/utility/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import axios from 'axios';


class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    showClear: false,
    alert: null,
    home: true,
  }

  //Fetch's users from github api
  searchUser = async text =>{
    this.setState({ loading: true, alert: null });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false, showClear: true });
  }

  //Gets data of single user
  getUser = async login => {
    this.setState({ loading: true});

    const res = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ user: res.data, loading: false });
  }

  //Clears the Users component
  clearUsers = () =>{
    this.setState({users: []});
    this.setState({showClear: false});
  }

  //Sets alert when search bar is empty
  setAlert = (text) => {
    this.setState({ alert: text});
  }

  changeActive = () => {
    const change = !this.state.home
    this.setState({ home: change });
  }

  render() {
    const { users, user, loading, showClear, alert, home, about } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar home={home} about={about} changeActive={this.changeActive} />
          <div className="container">
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Alert alert={alert} />
                  <Search searchUser={this.searchUser} clearUsers={this.clearUsers} showClear={showClear} setAlert={this.setAlert}/>
                  <Users users={users} loading={loading}/>
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
                <Fragment>
                  <User {...props} user={user} getUser={this.getUser} loading={loading}/>
                </Fragment>
              )}/>
            </Switch>
            
          </div>
        </div>
      </Router>
      
    )
  }
}

export default App;

