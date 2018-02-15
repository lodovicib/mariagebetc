import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import packageJson from '../../../package.json';
import MdHome from 'react-icons/lib/md/home';
import MdDirectionsRun from 'react-icons/lib/md/directions-run';
import MdInfoOutline from 'react-icons/lib/md/info-outline';
import MdDirectionsCar from 'react-icons/lib/md/directions-car';
import MdModeEdit from 'react-icons/lib/md/mode-edit';
import MdFavoriteOutline from 'react-icons/lib/md/favorite-outline';
import '../../styles/css/style.css';
import '../../styles/css/react-burger-menu.css';

let state = { menuOpen: false };

function handleStateChange (state) {
    state = {menuOpen: state.isOpen};
}

let path = function() {
    return  window.location.pathname;
};
const Header = () => (

    <header className="Header">
        <nav id="navigation">
            <ul className="Header-menu">
                <li><Link className={window.location.pathname === '/' ? 'active' : '' } to="/">Accueil</Link></li>
                <li><Link className={window.location.pathname === '/follow' ? 'active' : '' } to="/follow">Suivez-nous</Link></li>
                <li><Link className={window.location.pathname === '/infos' ? 'active' : '' } to="/infos">Infos</Link></li>
                <li><Link className={window.location.pathname === '/find' ? 'active' : '' } to="/find">Nous trouver</Link></li>
                <li><Link className={window.location.pathname === '/rsvp' ? 'active' : '' } to="/rsvp">RSVP</Link></li>
            </ul>
        </nav>
        <Menu isOpen={state.menuOpen}
              onStateChange={(state) => handleStateChange(state)}>
            <Link className={path() === '/' ? 'active' : '' } to="/">
                <MdHome /> <span>Accueil</span>
            </Link>
            <Link className={path() === '/follow' ? 'active' : '' } to="/follow">
                <MdDirectionsRun /> <span>Suivez-nous</span>
            </Link>
            <Link className={path() === '/infos' ? 'active' : '' } to="/infos">
                <MdInfoOutline /> <span>Informations</span>
            </Link>
            <Link className={path() === '/find' ? 'active' : '' } to="/find">
                <MdDirectionsCar /> <span>Nous trouver</span>
            </Link>
            <Link className={path() === '/rsvp' ? 'active' : '' } to="/rsvp">
                <MdModeEdit /> <span>RSVP</span>
            </Link>
            <Link className={path() === '/thankyou' ? 'active' : '' } to="/thankyou">
                <MdFavoriteOutline /> <span>Remerciements</span>
            </Link>
            <hr />
            <span>Version {packageJson.version}</span>
        </Menu>
    </header>
);

export default Header;
