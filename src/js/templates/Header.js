import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/style.css';


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
    </header>
);

export default Header;
