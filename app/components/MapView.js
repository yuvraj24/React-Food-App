import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoieXV2cmFqMjQiLCJhIjoiY2tjdnhmenU5MDhrMjJybW9wZ3RoczBoMiJ9.HEtB-HzQEJ08Gzkx4S5OLg',
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: 300,
    width: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});

export default class MapView extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
          <MapboxGL.UserLocation
            visible={true}
            // onUpdate={this.onUserLocationUpdate}
          />
          <MapboxGL.Camera
            zoomLevel={16}
            followUserMode={'normal'}
            followUserLocation
          />
          
        </View>
      </View>
    );
  }
}
