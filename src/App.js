import React, { Component } from 'react';
import './App.css';
import Search from './components/search/search'
import List from './components/list/itemList'
import axios from 'axios';
//?q={busqueda}?limit=10
const URL_BASE = "https://api.mercadolibre.com/"
const URL_SEARCH = URL_BASE + "sites/MCO/search"

class App extends Component {

  state = {
    value: '',
    data: {},
    limit: 10
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.input.value, ' Submit');
    this.searchItems()
    alert(this.input.value)
  }

  setInputRef = element => {
    this.input = element;
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  async searchItems() {
    const url = URL_SEARCH
    const resultList =  await axios.get(`${url}?q=${this.state.value}&limit=${this.state.limit}`)
    this.setState({data: resultList.data.results})
    //console.log(data)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to MyMercadoLibre</h1>
          <Search
            setRef={this.setInputRef}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleInputChange}
            value={this.state.value}
          />
        </header>
        <p>dsf{this.state.value}</p>

        <List list={this.state.data}/>

      </div>
    );
  }
}

export default App;
