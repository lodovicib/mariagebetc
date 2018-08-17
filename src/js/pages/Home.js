import React, { Component } from 'react';
import background from '../../styles/images/background_1.jpg';
import mobile from '../../styles/images/acceuil_1-mobile.jpg';
import '../../styles/css/style.css';

class Home extends Component {
    render() {
        return (
            <div className="App-content-home">
                    <div className="Home">
                        <img id={"desktop"} src={background} className="img-background" />
                        <img id={"mobile"} src={mobile} className="img-background" />
                    </div>
            </div>
        );
    }
}

export default Home;