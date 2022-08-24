import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { EarphonesScreen } from '../screens';
import { themeApp } from '../themeApp/themeApp';
import { DetailsEarphones } from '../screens/earphonesScreen/DetailsEarphones';

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