import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./Travel";
import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="photo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travels/>
      </div>
    );
  }
}

export default App;