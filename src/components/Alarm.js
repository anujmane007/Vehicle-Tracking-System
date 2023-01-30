import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Alarm = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
  const [ampm, setAmpm] = useState(new Date().getHours() >= 12 ? 'PM' : 'AM');

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
      setAmpm(new Date().getHours() >= 12 ? 'PM' : 'AM');
    }, 1000);
  }, []);

  return (
    <View>
      <Text style={styles.alarmT}>Alarm</Text>
      <View style={styles.container}>
        <Text style={styles.time}>{time} {ampm}</Text>
      </View>
        <Text style={styles.alaText}>Set Alarm Setting</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alarmT: {
    top: 15,
    width: 355,
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 34,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: '#37AB00',
    borderRadius: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  container: {
    width: 200,
    height: 100,
    top: 50,
    left: 75,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6D03',
    borderRadius: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  time: {
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 34,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  alaText:{
    top: 70,
    width: 305,
    left: 25,
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 34,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: '#FF4F03',
    borderRadius: 16,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  }
});

export default Alarm;
