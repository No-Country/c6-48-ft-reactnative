import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SpeakersScreen } from '../screens';
import { themeApp } from '../themeApp/themeApp';
import { DetailsSpeakers } from '../screens/speakersScreen/DetailsSpeakers';

const Stack = createStackNavigator();

export const StackSpeakers = () => {
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
      <Stack.Screen name="SpeakersScreen" component={SpeakersScreen} />
      <Stack.Screen name="DetailsSpeakers" component={DetailsSpeakers} />
    </Stack.Navigator>
  );
}