import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Track from './Track';
import JQVMap from './JQVMap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {tracks: [], country: null, errorMessage: null};
    this.getTracks = this.getTracks.bind(this);
    this.countryClickedFunction = this.countryClickedFunction.bind(this);
  }

  getTracks(country) {
    fetch(`/api/country/${country}`)
      .then(response => response.json()
        .then(json => {
          if (json.error) {
            this.setState({country: country, tracks: null, errorMessage: `No music information found`});
          } else {
            this.setState({country: country, tracks: json.tracks, errorMessage: null});
        }
      })
    );
  }

  countryClickedFunction(element, code, region) {
    this.getTracks(region);
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <div className="App-header">
            <h2>Music Around The World</h2>
            <h2>Click on a country to see its top tracks</h2>
          </div>
          <JQVMap countryClickedFunction={this.countryClickedFunction}/>
          {this.state.country}
          {this.state.tracks && this.state.tracks.map((track) => <Track key={track.rank} track={track}/>)}
          <div>{this.state.errorMessage}</div>
        </div>
        <footer>
          Powered by Last.FM
        </footer>
      </div>
    );
  }
}

export default App;
