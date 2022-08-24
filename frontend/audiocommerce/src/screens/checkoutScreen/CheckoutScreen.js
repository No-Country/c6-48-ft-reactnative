import React from 'react';

import { Text, ScrollView } from "react-native"
import {FooterScreen} from '../footerScreen/FooterScreen.js'
import { PullToRefresh } from '../../components/loading/PullToRefresh';

export const CheckoutScreen = ({navigation}) => {
	return (
		<ScrollView>
			<Text>Checkout</Text>
			<FooterScreen {...navigation}/> 
		</ScrollView>
	)
}