/* global React */
/* global BenchStore */
/* global ApiActions */
/* Google API key AIzaSyDTo_hv3JudxW1oeLAzL72_1H_c3QibVUE */
/* global google */

var Map = React.createClass({
  getInitialState: function () {
    return {locations: [], markers: []};
  },
  onChange: function () {
    var map = this.map;
    var bench = BenchStore.all();
    bench.forEach(function(location){
      if(this.state.locations.indexOf(location) === -1){
        var myLatlng = new google.maps.LatLng(location.lat,location.long);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: location.description
        });
        if(this.state.markers.indexOf(marker) === -1){
          this.state.markers.push(marker);
          this.state.locations.push(location);
        }
      }
    }.bind(this));

    for (var i = 0; i < this.state.locations.length; i++) {
      if(!this.

          compare(this.state.locations[i])){
          console.log("removed marker");
          this.state.markers[i].setMap(null);
          this.state.locations.splice(i, 1);
          this.state.markers.splice(i, 1);
          i -= 1;
      }
    }

      // debugger;
  },
  compare: function(location) {
    var bench = BenchStore.all();
      for (var j = 0; j < bench.length; j++) {
        if(location.id === bench[j].id){
          return true;
        }
      }
      return false;
  },
  componentDidMount: function (){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    BenchStore.addChangeListener(this.onChange);

    this.map.addListener('idle', function () {
      var swLat = this.getBounds().getSouthWest().J.toString();
      var swLng = this.getBounds().getSouthWest().M.toString();
      var neLat = this.getBounds().getNorthEast().J.toString();
      var neLng = this.getBounds().getNorthEast().M.toString();
      var bounds = {
        "northEast": {"lat": neLat, "lng":  neLng},
        "southWest": {"lat": swLat, "lng": swLng}
      };
      ApiActions.invokeFetch(bounds);
    });

  },
  render: function () {
    return (
      <div className="map" ref="map"></div>
    );
  }
});
