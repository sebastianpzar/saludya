import React from 'react';
import '../css/header.css';

const Header = () => {
    return(
        <div className="ui secondary menu navbar">
            <div className="header item">
                SaludYa
            </div>
            <div className=" right item"> Sign In </div>
        </div>
    );
}

export default Header;