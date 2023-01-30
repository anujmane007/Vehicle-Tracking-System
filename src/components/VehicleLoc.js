import React, { useState, useEffect } from 'react';
import MapView, { Marker, Circle } from 'react-native-maps';
import { StyleSheet, View, Text, Vibration } from 'react-native';
import * as Location from 'expo-location';
import { getDistance } from 'geolib';

const VehicleLoc = () => {
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

  const demoLocation = {
    latitude: 17.67152,  
    longitude: 74.02682
    // latitude:17.68765,
    // longitude: 74.01287
  };

  let distance = 0;
  if (location) {
    distance = getDistance(
      { latitude: location.coords.latitude, longitude: location.coords.longitude },
      demoLocation
    );
    if (distance < 200) {
      Vibration.vibrate(1000);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.locText}>Nearst vehicle Location</Text>
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
        <Marker
          coordinate={{
            latitude: demoLocation.latitude,
            longitude: demoLocation.longitude,
          }}
          title="Demo Location"
        />
        {location && (
          <Circle
            center={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            radius={100}
            fillColor="transparent"
            strokeColor="#0000FF"
          />
        )}
      </MapView>
      {/* <View style={styles.tCon}> */}
        <Text style={styles.yText}>Distance Between Vehicle And your loacation is:{"\n"} {distance} meters</Text>
      {/* </View> */}
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
    top: -20,
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
  tCon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
  },
  yText:{
    top: 10,
    width: 355,
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 34,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    backgroundColor: "#3CB503",
    borderRadius: 16,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default VehicleLoc;