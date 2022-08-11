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
			<Drawer.Screen name="Headphones" component={Headphones} />
			<Drawer.Screen name="Speakers" component={Speakers} />
			<Drawer.Screen name="Earphones" component={Earphones} />
			<Drawer.Screen name="Home" component={Home} />
			<Drawer.Screen name="Checkout" component={Checkout} />
		</Drawer.Navigator>
	);
}

const Headphones = () => {
	return (
		<Text>Headphones</Text>
	)
}
const Earphones = () => {
	return (
		<Text>Earphones</Text>
	)
}
const Speakers = () => {
	return (
		<Text>Speakers</Text>
	)
}
const Home = () => {
	return (
		<Text>Home</Text>
	)
}
const Checkout = () => {
	return (
		<Text>Checkout</Text>
	)
}