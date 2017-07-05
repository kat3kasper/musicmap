import React, { Component } from 'react';
import './Track.css';

class Track extends Component {

  render() {
    return (
      <div className="Track">
        <div className="rank">
          {this.props.track.rank}.
        </div>
        <div className="album">
          <img src={this.props.track.image} alt="Album Art"/>
        </div>
        <div className="info text-left">
          <div className="track-name">{this.props.track.name}</div>
          <div className="track-artist">{this.props.track.artist}</div>
        </div>
        <div className="listenerInfo">
          <div className="track-listeners-label">Listeners</div>
          <div className="track-listeners">{this.props.track.listeners}</div>
        </div>
      </div>
    );
  }
}

export default Track;
