import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/search'
//?q={busqueda}?limit=10
const URL_BASE = "https://api.mercadolibre.com/"
const URL_SEARCH = URL_BASE+"sites/MCO/search"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to MyMercadoLibre</h1>
          <Search/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
