import React from "react";
import {View, Text, StyleSheet} from "react-native";
import FirstPage from "./src/screens/FirstPage";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hey, Hello This is my first app</Text>
      <FirstPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: "red",
    fontSize: 1
  },
});

export default App;
