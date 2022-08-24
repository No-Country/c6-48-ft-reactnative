import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AdminScreen } from '../screens';
import { themeApp } from '../themeApp/themeApp';

const Stack = createStackNavigator();

export const StackAdmin = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          cardStyle:{
            backgroundColor: themeApp.colorWhite
          }
        }}
        defaultScreenOptions={{
            
        }}
    >
      <Stack.Screen name="AdminScreen" component={AdminScreen} />

    </Stack.Navigator>
  );
}