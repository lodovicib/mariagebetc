import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import '../../styles/css/style.css';
import background from '../../styles/images/background_5.jpg';

class Thankyou extends Component {
    render() {
        return (
            <div>
                <img src={background} style={{width: '100%', position: 'absolute', 'z-index': 1}} />
                <div className="App-contain">
                    <div className="Thankyou">
                        <h1>Remerciements</h1>
                        <div className="content-bloc">
                            <Container>
                                Merci tousa toussa
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Thankyou;