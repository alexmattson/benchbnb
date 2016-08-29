import React from 'react';
import { withRouter } from 'react-router';
import { values } from 'lodash';
import MarkerManager from '../../util/marker_manager';

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
    this.MarkerManager = new MarkerManager(this.map);

    this.map.addListener('idle', ()=>{
      let bounds = this.map.getBounds();
      let formattedBounds = {northEast: {lat: bounds.getNorthEast().lat(),
                                         lng: bounds.getNorthEast().lng()},
                             southWest: {lat: bounds.getSouthWest().lat(),
                                         lng: bounds.getSouthWest().lng()}};
      this.props.updateFilter('bounds', formattedBounds);
    });

    this.map.addListener('click', (e)=>{
      this._handleClick({ lat: e.latLng.lat(), lng: e.latLng.lng() });
      });
  }

  componentWillUpdate(nextProps) {
    this.MarkerManager.updateMarkers(nextProps.benches);
  }

  _handleClick(coords){
    this.props.router.push({
      pathname: "benches/new",
      query: coords
    });
  }

  render(){
    return(
      <div id='map-container' ref='map'>
      </div>
    );
  }
}

export default withRouter(BenchMap);
