import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import CircleIcon from '../assets/images/icons-circle.png';
import {Colors, Dimension, Constant} from '../styles';
import CustomMarkerView from './CustomMarkerView';
import RNLocation from 'react-native-location';

MapboxGL.setAccessToken(Constant.ACCESS_TOKEN);

class MapMarkerView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: 'blue',
      coordinates: [[0.0, 0.0]],
    };

    this.setUpLocation();
  }

  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  setUpLocation = () => {
    RNLocation.configure({
      distanceFilter: 5.0,
      desiredAccuracy: {android: 'balancedPowerAccuracy', ios: 'best'},
      androidProvider: 'auto',
    });

    RNLocation.requestPermission({
      ios: 'always',
      android: {
        detail: 'fine',
      },
    }).then((granted) => {
      if (granted) {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
          (locations) => {
            this.setState({
              coordinates: [[locations[0].longitude, locations[0].latitude]],
            });
          },
        );
      }
    });
  };

  render() {
    return (
      <View>
        <MapboxGL.MapView ref={(c) => (this._map = c)} style={styles.container}>
          <MapboxGL.Camera
            zoomLevel={16}
            centerCoordinate={this.state.coordinates[0]}
          />

          <MapboxGL.MarkerView coordinate={this.state.coordinates[0]}>
            <CustomMarkerView />
          </MapboxGL.MarkerView>
        </MapboxGL.MapView>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.GREY,
            height: 30,
            position: 'absolute',
            bottom: 0,
            width: '100%',
          }}
        />
      </View>
    );
  }
}

export default MapMarkerView;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: Dimension.MAP_HEIGHT,
    width: '100%',
  },
  map: {
    flex: 1,
  },
});
