import React, { Component } from 'react';
import '../styles/css/style.css';
import Header from './templates/Header.js';
import Footer from './templates/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-content" />
        <Footer />
      </div>
    );
  }
}

export default App;
