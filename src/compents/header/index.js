import React from "react";
import './header-style.css'

import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className="header">
            <img className="header-logo" src={logo} />
            <ul className="header-list">
                <li className="header-item"> <a href="#aboutUs">Quem somos</a></li>
                <li className="header-item">  <a href="#benefits">Vantagens</a> </li>
                <li className="header-item"><a href="#projects">Projetos</a> </li>
                <li className="header-item"><a href="#aboutUs">Contato</a> </li>
            </ul>
        </header>
    )
}

export default Header