import React from 'react';
import './Header.css';
import Menu from './Menu/Menu';

function Header(){
    return(
        <header className="header">
            <h1 className="mainHeader">My perfect site</h1>
            <Menu/>
        </header>
    )
}

export default Header;