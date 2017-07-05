import React, { Component } from 'react';
import './JQVMap.css';
import './jquery.vmap.js';
import './jquery.vmap.world.js';
import $ from 'jquery';

class JQVMap extends Component {

  componentDidMount() {
    $('#vmap').vectorMap({
      backgroundColor: '#091010',
      color: '#666666',
      selectedColor: '#9f050e',
      hoverColor: '#b80610',
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
        <span onClick={this.zoomOut} className="glyphicon glyphicon-minus zoom-out" aria-hidden="true"></span>
        <span onClick={this.zoomIn} className="glyphicon glyphicon-plus zoom-in" aria-hidden="true"></span>
      </div>
    );
  }
}

export default JQVMap;
