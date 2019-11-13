import React from 'react';
import '../css/header.css';

import logo from '../images/saludya.png';

import { Link } from 'react-router-dom';


const Header = () => {
    console.log(logo);
    return(
        <div className="ui secondary menu navbar">
            <Link className="button header-logo" to="/">
                <img src={logo} alt="saludya logo" />
            </Link>
            <Link to="/" className="ui large button right item">
                Sign in
            </Link>
        </div>
    );
}

export default Header;