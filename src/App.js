import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Distance from './Components/Distance/Distance'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Distance</h1>
        </header>
        <section className="Content">
            <Distance />
        </section>
      </div>
    );
  }
}

export default App;
