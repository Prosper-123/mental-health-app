import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import GuestFormScreen from './screens/GuestFormScreen';
import ProfessionalFormScreen from './screens/ProfessionalFormScreen';
import GuestQuestionnaireForm from './screens/GuestQuestionnaireForm';
import ProfessionalQuestionnaireForm from './screens/ProfessionalQuestionnaireForm';
import GuestDashboardScreen from './screens/GuestDashboardScreen';
import ProfessionalDashboardScreen from './screens/ProfessionalDashboardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GuestForm" component={GuestFormScreen} />
        <Stack.Screen name="ProfessionalForm" component={ProfessionalFormScreen} />
        <Stack.Screen name="GuestQuestionnaireForm" component={GuestQuestionnaireForm} />
        <Stack.Screen name="ProfessionalQuestionnaireForm" component={ProfessionalQuestionnaireForm} />
        <Stack.Screen name="GuestDashboardScreen" component={GuestDashboardScreen} />
        <Stack.Screen name="ProfessionalDashboardScreen" component={ProfessionalDashboardScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
