import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeadphonesScreen } from '../screens';
import { themeApp } from '../themeApp/themeApp';
import { DetailsHeadphones } from '../screens/headphonesScreen/DetailsHeadphones';

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