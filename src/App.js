import React, { Component } from 'react';
import home from './styles/images/home.jpg';
import alliances from './styles/images/alliances.PNG';
import './styles/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <ul className="App-header-menu">
                  <li>ACCUEIL</li>
                  <li>NOTRE HISTOIRE</li>
                  <li>INFOS</li>
                  <li>NOUS TROUVER</li>
                  <li>RSVP</li>
              </ul>
          </header>
        <div className="App-content"> { /* changer pour que ça soit dynamique dans le App-content */ }
            <img alt="" src={home}  />
        </div>
          <footer className="App-footer">
              <div className="App-footer-content">MARIAGE <img alt="" src={alliances}  /> 1.1.1001</div>
          </footer>
      </div>
    );
  }
}

export default App;
