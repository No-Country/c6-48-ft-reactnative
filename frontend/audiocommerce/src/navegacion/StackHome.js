import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen, DetailsHome } from '../screens';
import { themeApp } from '../themeApp/themeApp';

const Stack = createStackNavigator();

export const StackHome = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          cardStyle:{
            backgroundColor: themeApp.colorWhite
          },
          headerShown: false
        }}
        defaultScreenOptions={{
            
        }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsHome" component={DetailsHome} />
    </Stack.Navigator>
  );
}