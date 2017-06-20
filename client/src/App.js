import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Track from './Track';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {tracks: []};
    this.getTracks = this.getTracks.bind(this);
  }

  getTracks() {
    const country="colombia";
    console.log("tracks clicked");
    fetch(`/api/country/${country}`).then(response => response.json()).then(response => {
      console.log("tracks ", response);
      this.setState({tracks: response.tracks});
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <button onClick={this.getTracks}>Click</button>
          {this.state.tracks.map((track) => <Track key={track.rank} track={track}/>)}
      </div>
    );
  }
}

export default App;
