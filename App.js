import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigators/MainNavigation";
 
function App() {

  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
}

export default App;