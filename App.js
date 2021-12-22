import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigators/MainNavigation";
 
class App extends Component {

  render(){

  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}}

export default App;