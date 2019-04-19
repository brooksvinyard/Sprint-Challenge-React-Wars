import React, { Component } from 'react';
import CharactersList from './components/CharactersList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsFilms: [],
      starwarsVehicles: [],
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
    this.getFilms('https://swapi.co/api/films');
    this.getVehicles('https://swapi.co/api/vehicles');

  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getFilms = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsFilms: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getVehicles = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsVehicles: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharactersList starwarsChars={this.state.starwarsChars} starwarsFilms={this.state.starwarsFilms} starwarsVehicles={this.state.starwarsVehicles}/>
        {/* <CharactersList starwarsChars={this.state.starwarsChars} getFilms={this.getFilms}/> */}
      </div>
    );
  }
}

export default App;
