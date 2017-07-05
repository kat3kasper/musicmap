import React, { Component } from 'react';
import Track from './Track';
import JQVMap from './JQVMap';
import './App.css';

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
            <div className="h1">Music Around The World</div>
            <div className="h4 app-info">Click on a country to see its top tracks</div>
          </div>
          <JQVMap countryClickedFunction={this.countryClickedFunction}/>
          <div className="country h2">{this.state.country}</div>
          {this.state.country && <div className="hr-red"/>}
          <div className="tracks">
            {this.state.tracks && this.state.tracks.map((track) => <Track key={track.rank} track={track}/>)}
          </div>
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
