import React, { Component } from 'react';
import MdAccessTime from 'react-icons/lib/md/access-time';
import MdLocationOn from 'react-icons/lib/md/location-on';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../styles/css/style.css';

class Infos extends Component {
    static defaultProps = {
        center: {lat: 42.507473, lng: 8.855160},
        zoom: 14
    };

    render() {
        return (
            <div className="App-contain">
                <h1>Informations</h1>
                <div className="line"></div>
                <div className="content-bloc">
                    <MdAccessTime />
                    <div className="title">Quand ?</div>
                    Le samedi 8 Juin 2019<br />
                    Céremonie : N/A<br />
                    Réception : N/A<br />
                    <br />
                    <MdLocationOn />
                    <div className="title">Où ?</div>
                    N/A
                    <div style={{width: '100%', height: '400px'}}>
                        <Map center={this.props.center} zoom={this.props.zoom}>
                            <TileLayer
                                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={this.props.center}>
                                <Popup>
                                    <span>
                                      A pretty CSS3 popup. <br /> Easily customizable.
                                    </span>
                                </Popup>
                            </Marker>
                        </Map>
                    </div>
                </div>
            </div>
        );
    }
}

export default Infos;