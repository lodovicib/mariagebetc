import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
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
        const position = [this.props.center.lat, this.props.center.lng];
        return (
            <div className="App-contain">
                <h1>Informations</h1>
                <div className="line"></div>
                <div className="content-bloc">
                    <Container fluid={true}>
                        <Row>
                            <Col md="6">
                                <MdAccessTime />
                                <div className="title">Quand ?</div>
                                Le samedi 8 Juin 2019<br />
                                Céremonie : N/A<br />
                                Réception : N/A<br />
                            </Col>
                            <Col md="6">
                                <MdLocationOn />
                                <div className="title">Où ?</div>
                                N/A
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
            </div>
        );
    }
}

export default Infos;