import React, { Component } from 'react';
import MdFlight from 'react-icons/lib/md/flight';
import MdDirectionsFerry from 'react-icons/lib/md/directions-ferry';
import MdDirectionsCar from 'react-icons/lib/md/directions-car';
import MdDirectionsRun from 'react-icons/lib/md/directions-run';
import MdLocalHotel from 'react-icons/lib/md/local-hotel';
import corse from '../../styles/images/icon-corse.png';
import '../../styles/css/style.css';

class Find extends Component {
    render() {
        return (
            <div className="App-contain">
                <h1>Nous trouver</h1>
                <div className="content-bloc-line">
                    <div className="content-bloc">
                        <div className="title-adlery">
                            <img className="icon-title" src={corse} /> Venir en Corse
                        </div>
                        <div className="title-simple"><MdFlight className="icon-sub-title" /> En avion</div>
                        Aéroport Bastia-Poretta : Route de l'aéroport, 20290 Lucciana<br />
                        Aéroport Calvi Sainte Catherine : Route Calenzana 20260 Calvi<br />

                        <div className="title-simple"><MdDirectionsFerry className="icon-sub-title" /> En bateau</div>
                        Partant de : Marseille, Nice ou Toulon<br />
                        A destination de : Bastia ou Ile Rousse
                    </div>
                    <div className="content-bloc">
                        <div className="title-adlery">
                            <MdDirectionsRun className="icon-title" /> Se déplacer
                        </div>
                        <div className="title-simple"><MdDirectionsCar className="icon-sub-title" /> En voiture</div>
                        Il est INDISPENSABLE d'avoir une voiture pour accéder aux différents lieux du mariage <br />
                        Vous pouvez :
                        <ul>
                            <li>Louer une voiture à l'aéroport</li>
                            <li>Venir avec sa voiture en bateau</li>
                            <li>Faire du covoiturage entre les invités</li>
                        </ul>
                    </div>
                    <div className="content-bloc">
                        <div className="title-adlery">
                            <MdLocalHotel className="icon-title" /> Hébergements
                        </div>
                        <div className="title-simple">Hôtels</div>
                        <div className="title-simple">Maisons d'hôtes</div>
                        <div className="title-simple">Camping</div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Find;