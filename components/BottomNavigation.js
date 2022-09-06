import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import CreateAccount from './CreateAccount';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';



function MyTabs() {
    const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={CreateAccount} />
      <Tab.Screen name="Settings" component={Login} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;