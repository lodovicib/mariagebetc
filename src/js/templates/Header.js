import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import '../../styles/css/style.css';
import '../../styles/css/react-burger-menu.css';


const Header = () => (

    <header className="Header">
        <nav id="navigation" role="navigation">
            <ul className="Header-menu">
                <li><Link className={window.location.pathname === '/' ? 'active' : '' } to="/">Accueil</Link></li>
                <li><Link className={window.location.pathname === '/follow' ? 'active' : '' } to="/follow">Suivez-nous</Link></li>
                <li><Link className={window.location.pathname === '/infos' ? 'active' : '' } to="/infos">Infos</Link></li>
                <li><Link className={window.location.pathname === '/find' ? 'active' : '' } to="/find">Nous trouver</Link></li>
                <li><Link className={window.location.pathname === '/form' ? 'active' : '' } to="/form">RSVP</Link></li>
            </ul>
        </nav>
        <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
    </header>
);

export default Header;
