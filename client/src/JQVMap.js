import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './JQVMap.css';
import './jquery.vmap.js';
import './jquery.vmap.world.js';
import $ from 'jquery';

class JQVMap extends Component {


  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).vectorMap({backgroundColor: '#ffffff', enableZoom: true});
  }

  render() {
    return (
      <div className="JQVMap"></div>
    );
  }
}

export default JQVMap;
