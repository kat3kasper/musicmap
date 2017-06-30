import React, { Component } from 'react';
import './JQVMap.css';
import './jquery.vmap.js';
import './jquery.vmap.world.js';
import $ from 'jquery';

class JQVMap extends Component {

  componentDidMount() {
    $('#vmap').vectorMap({
      backgroundColor: '#ffffff',
      enableZoom: true,
      onRegionClick: this.props.countryClickedFunction,
      onLabelShow: this.onLabelShow
    });
  }

  onLabelShow(event, label, code) {
    event.preventDefault();
  }

  zoomIn() {
    $('#vmap').vectorMap('zoomIn');
  }

  zoomOut() {
    $('#vmap').vectorMap('zoomOut');
  }

  render() {
    return (
      <div className="JQVMap">
        <div id="vmap"></div>
        <button onClick={this.zoomOut}>Zoom Out</button>
        <button onClick={this.zoomIn}>Zoom In</button>
      </div>
    );
  }
}

export default JQVMap;
