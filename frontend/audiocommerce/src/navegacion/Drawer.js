import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
import { DrawerContent, HeaderApp } from '../components';

const Drawer = createDrawerNavigator();

export const MenuDrawer = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				header: (props) => <HeaderApp {...props} />,
				overlayColor: 1,
				gestureEnabled: false,
				sceneContainerStyle: {
					backgroundColor: 'white'
				},
				drawerStyle: {
					width: '100%',
					top: 90,
				},
			}}
			drawerContent={(props)=><DrawerContent {...props}/>}
		>
			<Drawer.Screen name="Headphone" component={Headphone} />
			<Drawer.Screen name="Speakers" component={Speakers} />
			<Drawer.Screen name="Earphone" component={Earphone} />
		</Drawer.Navigator>
	);
}

const Headphone = () => {
	return (
		<Text>Headphone</Text>
	)
}
const Earphone = () => {
	return (
		<Text>Earphone</Text>
	)
}
const Speakers = () => {
	return (
		<Text>Speakers</Text>
	)
}