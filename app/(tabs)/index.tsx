import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, StyleSheet } from 'react-native';
import { themeColors } from '../../src/screens/theme'; // Correct import

// Import your screen components
import HomeScreen from '../../src/screens/HomeScreen';
import ClassesScreen from '../../src/screens/ClassesScreen';



const Tab = createMaterialTopTabNavigator();

const TabsScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: themeColors.primaryPurple, // Use primary purple for active tab
        tabBarInactiveTintColor: themeColors.mediumGrey, // Use medium grey for inactive tab
        tabBarStyle: {
          backgroundColor: themeColors.background, // Use dark background
          marginTop: 20,
          elevation: 10,
          borderTopWidth: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: themeColors.primaryPurple, // Use primary purple for the indicator
          height: 4,
          borderRadius: 2,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: 1,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: () => (
            <Text style={styles.tabLabel}>
              Dashboard
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Classes"
        component={ClassesScreen}
        options={{
          tabBarLabel: () => (
            <Text style={styles.tabLabel}>
              Classes
            </Text>
          ),
        }}
      />
      
      
      
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: themeColors.primaryPurple, // Use primary purple for tab label
    textShadowColor: themeColors.background, // Use background color for shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default TabsScreen;