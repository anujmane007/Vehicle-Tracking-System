import React from 'react';
import { View, Text } from 'react-native';
import FirstPagefile from './src/screens/FirstPagefile';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Hello world</Text> */}
      <FirstPagefile/>
    </View>
  );
};

export default App;
