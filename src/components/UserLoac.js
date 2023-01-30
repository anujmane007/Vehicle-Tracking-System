import React, { useState, useEffect } from 'react';
import MapView, { Marker, Circle } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';

const UserLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMessage('Permission to access location was denied');
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    };
    getLocation();
  }, []);

  let text = 'Waiting..';
  if (errorMessage) {
    text = errorMessage;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.locText}>Your Location</Text>
      <MapView
        style={styles.map}
        mapType="satellite"
        region={{
          latitude: location?.coords.latitude || 37.78825,
          longitude: location?.coords.longitude || -122.4324,
          latitudeDelta: 0.004,
          longitudeDelta: 0.004,
        }}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="My Location"
          />
        )}
        {location && (
          <Circle
            center={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            radius={50}
            fillColor="transparent"
            strokeColor="#0000FF"
          />
        )}
      </MapView>
      <View style={styles.tCon}>
        <Text style={styles.yText}>Set Your{'\n'}Location</Text>
        <Text style={styles.rText}>Set Your{'\n'}Radius</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locText: {
    top: -15,
    width: 355,
    fontWeight: "700",
    fontSize: 28,
    lineHeight: 34,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    backgroundColor: "#F5860C",
    borderRadius: 16,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  map: {
    width: '100%',
    height: '70%',
  },
  text: {
    marginTop: 15,
  },
  tCon:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
  },
  yText: {
    width: 147,
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 34,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: '#3CB503',
    borderRadius: 16,
    padding: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  rText: {
    width: 147,
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 34,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: '#3CB503',
    borderRadius: 16,
    padding: 10,
    marginLeft: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default UserLocation;