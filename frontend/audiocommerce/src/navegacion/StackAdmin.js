import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AdminScreen } from '../screens';

const Stack = createStackNavigator();

export const StackAdmin = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          
        }}
        defaultScreenOptions={{
            
        }}
    >
      <Stack.Screen name="AdminScreen" component={AdminScreen} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}