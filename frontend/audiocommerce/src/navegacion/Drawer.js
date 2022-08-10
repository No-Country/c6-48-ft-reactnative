import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuDrawer=()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Headphone" component={Headphone} />
      <Drawer.Screen name="Speakers" component={Speakers} />
      <Drawer.Screen name="Earphone" component={Earphone} />
    </Drawer.Navigator>
  );
}

const Headphone = ()=>{
    return(
      <Icon name='cart-outline' size={40} color='black' />
    )
}
const Earphone = ()=>{
    return(
        <Text>Earphone</Text>
    )
}
const Speakers = ()=>{
    return(
        <Text>Speakers</Text>
    )
}