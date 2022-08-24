import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeadphonesScreen, DetailsHeadphones } from '../screens';
import { themeApp } from '../themeApp/themeApp';

const Stack = createStackNavigator();

export const StackHeadphones = () => {
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
      <Stack.Screen name="HeadphonesScreen" component={HeadphonesScreen} />
      <Stack.Screen name="DetailsHeadphones" component={DetailsHeadphones} />
    </Stack.Navigator>
  );
}