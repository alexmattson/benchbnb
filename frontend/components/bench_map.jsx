import React from 'react';
import { values } from 'lodash';

class BenchMap extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const mapDOMNode = this.refs.map;

    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }

  render(){
    return(
      <div id='map-container' ref='map'>
      </div>
    );
  }
}

export default BenchMap;
