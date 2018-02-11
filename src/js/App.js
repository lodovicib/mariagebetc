import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/css/style.css';
import Header from './templates/Header.js';
import Footer from './templates/Footer.js';
import Form from "./pages/Form";
import Follow from "./pages/Follow";
import Home from "./pages/Home";
import Find from "./pages/Find";
import Infos from "./pages/Infos";
import Thankyou from "./pages/Thankyou";

class App extends Component {

    showSettings (event) {
        event.preventDefault();
    }
  render() {
    return (
        <Router>
          <div className="App">
            <Header />
                  <div className="App-content">
                      <Route exact path="/" component={Home}/>
                      <Route path="/follow" component={Follow}/>
                      <Route path="/infos" component={Infos}/>
                      <Route path="/find" component={Find}/>
                      <Route path="/rsvp" component={Form}/>
                      <Route path="/thankyou" component={Thankyou}/>
                  </div>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
