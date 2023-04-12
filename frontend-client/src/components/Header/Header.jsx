import React from 'react';
import chitterlogo2 from './chitterlogo2.png';
import './Header.css';
import FormattedDate from '../FormattedDate/FormattedDate';


const Header = ({loggedIn}) => {
    return (
        <header className="header ">
            <img src={chitterlogo2} alt="Logo" className="logo"/>
            <h1>Today's Chitter: <FormattedDate/></h1>

            <ul className="nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">Home</a>
                </li>
                {!loggedIn && (
                    <li className="nav-item">
                        <a href="/login" className="nav-link">Login</a>
                    </li>
                )}
                {!loggedIn && (
                    <li className="nav-item">
                        <a href="/register" className="nav-link">Register</a>
                    </li>
                )}
                {loggedIn && (
                    <li className="nav-item">
                        <a href="/add-peep" className="nav-link">Add Peep</a>
                    </li>
                )}
                {loggedIn && (
                    <li className="nav-item">
                        <a href="/logout" className="nav-link">Log Out</a>
                    </li>
                )}
            </ul>
        </header>
  );
};

export default Header;