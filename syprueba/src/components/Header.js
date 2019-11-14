import React from 'react';
import '../css/header.css';

import logo from '../images/saludya.png';
import logo2 from '../images/saludya-azul.png'; 

import { Link } from 'react-router-dom';


const Header = ({layout}) => {
    console.log(logo);
    return(
        <div className="ui secondary menu navbar">
            <Link className="button header-logo" to="/">
                <img src={layout === 1 ? logo : logo2} alt="saludya logo" />
            </Link>
            <Link to="/" className={`ui large button right item ${layout === 1 ? '' : 'alt'}`}>
                Sign in
            </Link>
        </div>
    );
}

export default Header;