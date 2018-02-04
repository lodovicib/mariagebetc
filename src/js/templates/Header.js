import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/style.css';


const Header = () => (
    <header className="Header">
        <nav id="navigation" role="navigation">
            <ul className="Header-menu">
                <li><Link className={window.location.pathname === '/' ? 'active' : '' } to="/">ACCUEIL</Link></li>
                <li><Link className={window.location.pathname === '/follow' ? 'active' : '' } to="/follow">SUIVEZ-NOUS</Link></li>
                <li><Link className={window.location.pathname === '/infos' ? 'active' : '' } to="/infos">INFOS</Link></li>
                <li><Link className={window.location.pathname === '/find' ? 'active' : '' } to="/find">NOUS TROUVER</Link></li>
                <li><Link className={window.location.pathname === '/form' ? 'active' : '' } to="/form">RSVP</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;
