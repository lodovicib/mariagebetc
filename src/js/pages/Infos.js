import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import MdAccessTime from 'react-icons/lib/md/access-time';
import MdLocationOn from 'react-icons/lib/md/location-on';
import MdLocalBar from 'react-icons/lib/md/local-bar';
import MdLocalRestaurant from 'react-icons/lib/md/local-restaurant';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import FaGift from 'react-icons/lib/fa/gift';
import '../../styles/css/style.css';

class Infos extends Component {
    static defaultProps = {
        center: {lat: 42.507473, lng: 8.855160},
        zoom: 14
    };

    render() {
        const position = [this.props.center.lat, this.props.center.lng];
        return (
            <div className="App-contain">
                <h1>Informations</h1>
                <div className="content-bloc-line">
                    <div className="content-bloc">
                        <Container fluid={true}>
                            <Row>
                                <Col md="4">
                                    <MdAccessTime className="icon" />
                                    <div className="title-simple">Quand ?</div>
                                    Le samedi 08 Juin 2019<br />
                                    Céremonie : 18h<br />
                                    Réception : N/A<br />
                                </Col>
                                <Col md="4">
                                    <MdLocationOn className="icon" />
                                    <div className="title-simple">Où se trouve l'église ?</div>
                                    Eglise Saint Jean Baptiste<br />
                                    Place du marché<br />
                                    4 Rue Cardinal Viale Prelà<br />
                                    20200 Bastia
                                </Col>
                                <Col md="4">
                                    <MdLocalBar className="icon" /> <MdLocalRestaurant className="icon" />
                                    <div className="title-simple">Où se déroule la réception ?</div>
                                    La Lagune<br />
                                    Lotissement California<br />
                                    20290 Lucciana
                                </Col>
                            </Row>
                        </Container>

                        <Map center={this.props.center} zoom={this.props.zoom} className="leaflet-map">
                            <TileLayer
                                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            { /*
                            <Marker position={position}>
                                <Popup>
                                    <span>
                                      A pretty CSS3 popup. <br /> Easily customizable.
                                    </span>
                                </Popup>
                            </Marker>
                            */}
                        </Map>
                    </div>
                    <div className="content-bloc">
                        <div className="title-adlery">
                            <FaGift className="icon-title" /> Liste de mariage
                        </div>
                        A venir
                    </div>
                </div>
            </div>
        );
    }
}

export default Infos;