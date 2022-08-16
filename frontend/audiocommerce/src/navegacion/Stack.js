import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { CategoriaScreen } from '../screen/CategoriaScreen';
import { ProductoScreen } from '../screen/ProductoScreen';
import { HeaderStack } from '../components';

const Stack = createStackNavigator();

export const NavegacionStack= ( )  => {
  return (
    <Stack.Navigator
        screenOptions={{
            // header:(props)=> <HeaderStack {...props} />
        }}
    >
      <Stack.Screen name="CategoriaScreen" component={ CategoriaScreen } />
      <Stack.Screen name="ProductoScreen" component={ProductoScreen} />
    </Stack.Navigator>
  );
}