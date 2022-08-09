import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { MenuDrawer } from './src/navegacion/Drawer';
import { Text } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <MenuDrawer />
    </NavigationContainer>
  )
}

export default App;
