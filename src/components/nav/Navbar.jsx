import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {

    render() {
        const { home, about, changeActive } = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                <Link className="navbar-brand" to="/"> <i className="fab fa-github"></i> GithubFinder</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${home && 'active'}`}>
                            <Link onClick={changeActive} className="nav-link" to="/">Home</Link>
                        </li>
                        <li className={`nav-item ${about ? 'active':''}`}>
                            <Link onClick={changeActive} className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;
