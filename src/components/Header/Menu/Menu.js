import React from 'react';
import './Menu.css';

function Menu(){
    return(
        <ul className="menu">
         <li className="menu__item">Home</li>
         <li className="menu__item">About</li>
         <li className="menu__item">Blog</li>
         <li className="menu__item">Contact</li>
        </ul>   
    );
}
export default Menu;