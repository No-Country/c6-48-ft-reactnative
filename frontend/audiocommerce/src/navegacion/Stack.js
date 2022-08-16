import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { CategoriaScreen } from '../screen/CategoriaScreen';
import { ProductoScreen } from '../screen/ProductoScreen';

const Stack = createStackNavigator();

export const NavegacionStack= ( )  => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CategoriaScreen" component={ CategoriaScreen } />
      <Stack.Screen name="ProductoScreen" component={ProductoScreen} />
    </Stack.Navigator>
  );
}