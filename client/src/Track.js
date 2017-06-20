import React, { Component } from 'react';
// import './Track.css';

class Track extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Track">
        <div>Rank: {this.props.track.rank}</div>
        <div>Song Title: {this.props.track.name}</div>
        <div>Artist:{this.props.track.artist}</div>
        <div>Listeners:{this.props.track.listeners}</div>
      </div>
    );
  }
}

export default Track;
