import React from "react";
import {View, Text, StyleSheet} from "react-native";

const FirstPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hey, Hello This is my first Page</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: "red",
    fontSize: 10
  },
});

export default FirstPage;
