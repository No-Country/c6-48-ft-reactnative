import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
import { HeaderApp } from '../components/header/HeaderApp';

const Drawer = createDrawerNavigator();

export const MenuDrawer=()=> {
  return (
    <Drawer.Navigator
      screenOptions={{
        header:(props)=><HeaderApp {...props}/>
      }}
    >
      <Drawer.Screen name="Headphone" component={Headphone} />
      <Drawer.Screen name="Speakers" component={Speakers} />
      <Drawer.Screen name="Earphone" component={Earphone} />
    </Drawer.Navigator>
  );
}

const Headphone = ()=>{
    return(
     <Text>Headphone</Text>
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