import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SpeakersScreen, DetailsSpeakers } from '../screens';
import { themeApp } from '../themeApp/themeApp';

const Stack = createStackNavigator();

export const StackSpeakers = () => {
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
      <Stack.Screen name="SpeakersScreen" component={SpeakersScreen} />
      <Stack.Screen name="DetailsSpeakers" component={DetailsSpeakers} />
    </Stack.Navigator>
  );
}