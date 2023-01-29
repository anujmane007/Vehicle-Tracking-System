import React from 'react';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPagefile from './src/screens/FirstPagefile';
import LoginForm from './src/components/LoginForm';
import HomePage from './src/screens/HomePage';
import VehicleLoc from './src/components/VehicleLoc';
import UserLoc from './src/components/UserLoac';
import Alarm from './src/components/Alarm';
import Report from './src/components/Report';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='FirstPagefile'>
        <Stack.Screen name="EcoRoute" component={FirstPagefile} />
        <Stack.Screen name="LoginPage" component={LoginForm} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="VehicleLocation" component={VehicleLoc} />
        <Stack.Screen name="UserLocation" component={UserLoc} />
        <Stack.Screen name="SetAlarm" component={Alarm} />
        <Stack.Screen name="Report" component={Report} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;