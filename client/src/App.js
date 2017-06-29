import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Track from './Track';
import JQVMap from './JQVMap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {tracks: [], country: null};
    this.getTracks = this.getTracks.bind(this);
    this.countryClickedFunction = this.countryClickedFunction.bind(this);
  }

  getTracks(country) {
    console.log("country clicked", country);
    this.setState({country: country});
    fetch(`/api/country/${country}`).then(response => response.json()).then(response => {
      console.log("tracks ", response);
      this.setState({tracks: response.tracks});
    })
  }

  countryClickedFunction(element, code, region) {
    this.getTracks(region);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Music Map</h2>
        </div>
        <JQVMap countryClickedFunction={this.countryClickedFunction}/>
        {this.state.country}
        {this.state.tracks && this.state.tracks.map((track) => <Track key={track.rank} track={track}/>)}
      </div>
    );
  }
}

export default App;
