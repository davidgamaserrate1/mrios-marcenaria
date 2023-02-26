import React from "react";
import './header-style.css'

import logo from '../../assets/logo.png'

const Header = () =>{
    return (
        <header className="header">
            <img className="header-logo" src={logo}/>
            <ul className="header-list">                 
                <li className="header-item">Quem somos</li>
                <li className="header-item">Vantagens</li>
                <li className="header-item">Projetos</li>
                <li className="header-item">Contato</li>
            </ul>
        </header>
    )
}

export default Header