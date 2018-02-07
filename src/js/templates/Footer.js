import React from 'react';
import { Link } from 'react-router-dom';
import alliances from '../../styles/images/alliances-transparent.png';
import '../../styles/css/style.css';

const Footer = () => (
    <footer className="App-footer">
        <div className="App-footer-weeding"><span>MARIAGE</span> <img alt="" src={alliances}  /> <span>08.07.2019</span></div>
        <div className="App-footer-copyright">Designed by Marion Pradet© powered by Bénédicte Lodovici™ All rights reserved | <Link to="/thankyou">Remerciements</Link></div>
    </footer>
);

export default Footer;

