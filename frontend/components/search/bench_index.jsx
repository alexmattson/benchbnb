import React from 'react';
import { values } from 'lodash';

class BenchIndex extends React.Component{

  render(){
    let benches = values(this.props.benches).map(bench => (
      <li key={`${bench.lat}${bench.lng}`}>
        <span>lat: {bench.lat}</span>
        <span>lng: {bench.lng}</span>
      </li>
    ));
    return(
      <ul>
        {benches}
      </ul>
    );
  }
}

export default BenchIndex;
