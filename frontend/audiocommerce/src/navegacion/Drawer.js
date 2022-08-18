import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent, HeaderApp } from '../components';
import { AdminScreen, CheckoutScreen, EarphonesScreen, HeadphonesScreen, HomeScreen, ProductoScreen, SpeakersScreen } from '../screens';
import { StackAdmin } from './StackAdmin';

const Drawer = createDrawerNavigator();

export const MenuDrawer = () => {
	return (
		<Drawer.Navigator
		initialRouteName='StackAdmin'
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
			drawerContent={(props) => <DrawerContent {...props} />}
		>
			<Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="Headphones" component={HeadphonesScreen} />
			<Drawer.Screen name="Speakers" component={SpeakersScreen} />
			<Drawer.Screen name="Earphones" component={EarphonesScreen} />
			<Drawer.Screen name="Checkout" component={CheckoutScreen} />
			<Drawer.Screen name="ProductoScreen" component={ProductoScreen} />
			<Drawer.Screen name="StackAdmin" component={StackAdmin} />
		</Drawer.Navigator>
	);
}




