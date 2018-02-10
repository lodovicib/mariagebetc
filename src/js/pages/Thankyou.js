import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import '../../styles/css/style.css';
import background from '../../styles/images/background_5.jpg';
import heart from '../../styles/images/keur.png';

class Thankyou extends Component {
    render() {
        return (
            <div>
                <img src={background} className="img-background" />
                <div className="App-contain" id={"thank-contain"}>
                    <div className="Thankyou">
                        <h1>Remerciements</h1>
                        <div className="content-bloc">
                            <Container>
                                <Row>
                                    <Col md="12">
                                        <img src={heart} className="img-coeur" />
                                        Merci tousa toussa
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Thankyou;