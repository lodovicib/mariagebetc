import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/css/style.css';
import Loader from 'react-loader';
import Header from './templates/Header.js';
import Footer from './templates/Footer.js';
import Form from "./pages/Form";
import Follow from "./pages/Follow";
import Home from "./pages/Home";
import Find from "./pages/Find";
import Infos from "./pages/Infos";
import Thankyou from "./pages/Thankyou";
import $ from 'jquery';

class App extends Component {

    constructor() {
        super();
        this.state = { isLoaded: false };
        this.handleLoad = this.handleLoad.bind(this);
    }

    toggleLoader() {
        this.setState({ isLoaded: !this.state.isLoaded });
    }

    componentDidMount() {
        window.addEventListener('DOMContentLoaded', this.handleLoad);
    }

    componentDidUpdate() {
        window.addEventListener('DOMContentLoaded', this.handleLoad);
    }

    handleLoad() {
        $("#App-content").width("100%");
        this.toggleLoader();
    }

    showSettings (event) {
        event.preventDefault();
    }
  render() {
    const { isLoaded } = this.state;
    return (
        <Router>
          <div className="App">
            <Header />
              <Loader loaded={isLoaded}>
                  <div className="App-content">
                      <Route exact path="/" component={Home}/>
                      <Route path="/follow" component={Follow}/>
                      <Route path="/infos" component={Infos}/>
                      <Route path="/find" component={Find}/>
                      <Route path="/rsvp" component={Form}/>
                      <Route path="/thankyou" component={Thankyou}/>
                  </div>
              </Loader>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
