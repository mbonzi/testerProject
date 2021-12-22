import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AboutUs from '../screens/AboutUs';


const HomeStackNav = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStackNav.Navigator>
        <HomeStackNav.Screen 
            name='Home Screen' 
            component={HomeScreen} 
        />
    </HomeStackNav.Navigator>
  );
}