import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="photo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          destination="Tadoussac"
          country="Canada"
          photo="https://www.quebecvacances.com/images/photos/photos_600_400/croisieres_aml_tadoussac_11.jpg"
          distance="5 431 km"
        />
        <Travel
          destination="Krabi"
          country="Thaïlande"
          photo="https://img.ev.mu/images/attractions/7690/600x400/435359.jpg"
          distance="9.693,10 km"
        />
      </div>
    );
  }
}

export default App;