import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { MenuDrawer } from './src/navegacion/Drawer';
import { StatusBar } from 'react-native';
import { themeApp } from './src/themeApp/themeApp';
import { ProductProvider } from './src/context/productContext/ProductContext';
import { CartProvider } from './src/context/cartContext/CartContext';

const App = () => {

  return (
    <NavigationContainer>
      <AppState>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={themeApp.colorBlack}
        />
        <MenuDrawer />
      </AppState>
    </NavigationContainer>
  )
}


const AppState = ({ children }) => {

  return (
    <ProductProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </ProductProvider>
  )
}

export default App;
