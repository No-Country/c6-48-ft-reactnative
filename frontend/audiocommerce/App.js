import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { MenuDrawer } from './src/navegacion/Drawer';
import { StatusBar } from 'react-native';
import { themeApp } from './src/themeApp/themeApp';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={themeApp.colorBlack}
      />
      <MenuDrawer />
    </NavigationContainer>
  )
}

export default App;
