import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent, HeaderApp } from '../components';
import { CheckoutScreen, ProductoScreen } from '../screens';
import { StackHeadphones, StackSpeakers, StackEarphones, StackAdmin } from './';
import { StackHome } from './StackHome';
import {ModalCartForSummary} from '../components/modals/ModalCartForSummary.js'
import {ModalCart} from '../components/modals/ModalCart'


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
			drawerContent={(props) => <DrawerContent {...props} />}
		>
			<Drawer.Screen name="Home" component={StackHome} />
			<Drawer.Screen name="Headphones" component={StackHeadphones} />
			<Drawer.Screen name="Speakers" component={StackSpeakers} />
			<Drawer.Screen name="Earphones" component={StackEarphones} />
			<Drawer.Screen name="Checkout" component={CheckoutScreen} />
			<Drawer.Screen name="ProductoScreen" component={ProductoScreen} />
			<Drawer.Screen name="StackAdmin" component={StackAdmin} />


		</Drawer.Navigator>
	);
}




