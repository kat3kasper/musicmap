import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import './jquery.vmap.js';
import './jquery.vmap.world.js';

class JQVMap extends Component {

  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).vectorMap()
    // $('#vmap').vectorMap({
    //   map: 'world_en',
    //   backgroundColor: null,
    //   color: '#ffffff',
    //   hoverOpacity: 0.7,
    //   selectedColor: '#666666',
    //   enableZoom: true,
    //   showTooltip: true,
    //   scaleColors: ['#C8EEFF', '#006491'],
    //   normalizeFunction: 'polynomial'
    // });
  }

  render() {
    return (
      <div className="JQVMap">
        {this.props.text}
      </div>
    );
  }
}

export default JQVMap;
