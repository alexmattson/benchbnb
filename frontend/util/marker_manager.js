class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = [];
    this.benches = null;
  }

  _benchesToAdd(){
    const currentBenchIds = this.markers.map( marker => marker.benchId );
    const newBenches = this.benches;
    const newBenchIds = Object.keys(newBenches);

    return newBenchIds.reduce( (collection, benchId) => {
      if (!currentBenchIds.includes(benchId)) {
        return ( collection.concat( [newBenches[benchId]] ));
      }
    }, [] );
  }
  
  _createMarkerFromBench(bench) {
    let marker = new google.maps.Marker({
      position: {lat: bench.lat, lng: bench.lng},
      map: this.map,
      title: 'New Bench',
      benchId: bench.id
    });
    this.markers.push(marker);
  }

  _markersToRemove(){
    return this.markers.filter( marker => {
      return !this.benches.hasOwnProperty(marker.benchId);
    });
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }

  updateMarkers(benches){
    this.benches = benches;

    this._benchesToAdd().forEach(bench => {
      this._createMarkerFromBench(bench);
    });

    this._markersToRemove().forEach(marker => {
      this._removeMarker(marker);
    });
  }
}

export default MarkerManager;
