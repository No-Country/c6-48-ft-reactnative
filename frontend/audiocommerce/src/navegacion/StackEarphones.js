import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { EarphonesScreen, DetailsEarphones } from '../screens';
import { themeApp } from '../themeApp/themeApp';

const Stack = createStackNavigator();

export const StackEarphones = () => {
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
      <Stack.Screen name="EarphonesScreen" component={EarphonesScreen} />
      <Stack.Screen name="DetailsEarphones" component={DetailsEarphones} />
    </Stack.Navigator>
  );
}