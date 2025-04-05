// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import LandingScreen from '../screens/LandingScreen';
import LoginSelectionScreen from '../../app/LoginSelection';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import TabsScreen from '../../app/(tabs)/index';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Landing">
    {/* Landing Screen */}
    <Stack.Screen 
      name="Landing" 
      component={LandingScreen} 
      options={{ headerShown: false }} 
    />
    {/* Login Selection Screen */}
    <Stack.Screen 
      name="LoginSelection" 
      component={LoginSelectionScreen} 
      options={{ headerShown: false }} 
    />
    {/* Login Screen */}
    <Stack.Screen 
      name="Login" 
      component={LoginScreen} 
      options={{ headerShown: false }} 
    />
    {/* Signup Screen */}
    <Stack.Screen 
      name="Signup" 
      component={SignupScreen} 
      options={{ headerShown: false }} 
    />
    {/* Main App (Tab Navigator) */}
    <Stack.Screen 
      name="Main" 
      component={TabsScreen} 
      options={{ headerShown: false }} 
    />
  </Stack.Navigator>
);

export default AppNavigator;