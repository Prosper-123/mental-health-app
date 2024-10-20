// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import GuestFormScreen from './screens/GuestFormScreen';
import ProfessionalFormScreen from './screens/ProfessionalFormScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GuestForm" component={GuestFormScreen} />
        <Stack.Screen name="ProfessionalForm" component={ProfessionalFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}