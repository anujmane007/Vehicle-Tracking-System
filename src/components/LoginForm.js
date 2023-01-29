import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import ImgLog from "./ImgLog";

const LoginForm = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.mainC}>
      <Text style={styles.eText}>EcoRoute</Text>
      <ImgLog/>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setUsername(text)}
          value={username}
        />
      </View>
        <Text style={styles.label2}>Password</Text>
        <TextInput
          style={styles.input2}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      <Text style={styles.logText} onPress={() => navigation.navigate('HomePage')}>SUBMIT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainC: {
    backgroundColor: "#FFFFFF",
  },
  eText: {
    fontSize: 50,
    top: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#00BD56',
  },
  inputContainer: {
    marginTop: 180,
    left: 7,
    marginRight: 10,
    marginBottom: 10,
  },
  label: {
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 22,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: "#333333",
  },
  input: {
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  label2: {
    fontWeight: "700",
    marginTop: 10,
    left: 5,
    fontSize: 18,
    lineHeight: 22,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: "#333333",
  },
  input2:{
    marginTop: 10,
    height: 40,
    left: 5,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  logText: {
    
    bottom: -75,
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
});
export default LoginForm;