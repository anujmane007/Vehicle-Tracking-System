import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Images from "../components/Images";


const FirstPagefile = ({ navigation }) => {
  return (
    <View style={styles.mainC}>
      <Images/>
      <Text style={styles.mainText}>Welcome To</Text>
      <Text style={styles.mainText2}>EcoRoute</Text>
      <Text style={styles.mainText3}>Never Worry About Missed Garbage Pickups Again with EcoRoute</Text>
      <Text style={styles.logText} onPress={() => navigation.navigate('LoginPage')}>LOGIN</Text>
      <View style={styles.container}>
        <Text style={styles.signUpC}>Sign Up</Text>
        <Text style={styles.signUpD}>Sign Up</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.fText}>For Eco-Citizens</Text>
        <Text style={styles.sText}>For Waste Worriers</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  mainC:{
    backgroundColor: '#FFFFFF',
  },
  mainText: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 48,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    top: 215,
    color: '#FF8A00',
  },
  mainText2: {
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 48,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    top: 200,
    textDecorationLine: 'underline',
    color: '#00BD56',
  },
  mainText3: {
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18,
    top: 210,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#000000',
  },
  logText: {
    top: 250,
    width: 355,
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 34,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: '#F5860C',
    borderRadius: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 325,
  },
  signUpC: {
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
  signUpD: {
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
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 325,
  },
  fText: {
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 38,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#000000',
    marginRight: 20,
  },
  sText: {
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#000000',
    marginLeft: 60,
  },
});
export default FirstPagefile;
