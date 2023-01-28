import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImagesFile from "../components/Images";

const FirstPagefile = () => {
  return (
    <View>
      <ImagesFile />
      <Text style={styles.mainText}>Welcome to</Text>
      <Text style={styles.mainText2}>EcoRoute</Text>

    </View>

  );
};

const styles = StyleSheet.create({
  mainText: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 48,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    top: -70,
    color: '#FF8A00',
  },
  mainText2:{
    fontStyle: 'italic',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 48,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    top: -70,
    color: '#00BD56',
  }
});
export default FirstPagefile;
