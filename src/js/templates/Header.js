import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../styles/css/style.css';
import Home from '../pages/Home.js';
import Follow from '../pages/Follow.js';
import Infos from '../pages/Infos.js';
import Find from '../pages/Find.js';
import Form from '../pages/Form.js';

const Header = () => (
    <Router>
        <header className="Header">
        <nav id="navigation" role="navigation">
            <ul className="Header-menu">
                <li><Link to="/">ACCUEIL</Link></li>
                <li><Link to="/follow">SUIVEZ-NOUS</Link></li>
                <li><Link to="/infos">INFOS</Link></li>
                <li><Link to="/find">NOUS TROUVER</Link></li>
                <li><Link to="/form">RSVP</Link></li>
            </ul>
        </nav>
            <Route exact path="/" component={Home}/>
            <Route path="/follow" component={Follow}/>
            <Route path="/infos" component={Infos}/>
            <Route path="/find" component={Find}/>
            <Route path="/form" component={Form}/>
        </header>
    </Router>
);

export default Header;
