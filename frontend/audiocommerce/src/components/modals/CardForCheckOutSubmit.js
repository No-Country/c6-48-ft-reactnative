import React, { useContext, useEffect, useMemo, useState} from 'react'
import {FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import  {CartContext}  from '../../context/cartContext/CartContext.js';
import { convertToCurrency } from '../../helpers/converToCurrency';
import { getTotalsToPay } from '../../helpers/getTotalsToPay';
import { themeApp } from '../../themeApp/themeApp';
import {ModalItemForSummary} from './ModalItemForSummary';
import { useNavigation } from '@react-navigation/native';


export const CardForCheckOutSubmit = ({show, setShowCard}) => {

	const { cartState, removeAllItems } = useContext(CartContext);

	const { products } = cartState;

	const totals = useMemo(()=>  getTotalsToPay(products), [ products ]);
	
	const theCartHaveProducts = (products.length > 0);

	const {height, width}  = useWindowDimensions();

	const navigationn = useNavigation();

	return (
		<Modal
			visible={show}
			animationType='fade'
			transparent
		>

			<View style={{
				flex: 1,
				backgroundColor: 'rgba(0,0,0,.3)',
				justifyContent: 'center',
				alignItems: 'center'
			}}>

				<View style={{
					width: width*.9,
					maxWidth: themeApp.widthStd,
					height: height * .8 ,
					backgroundColor: themeApp.colorWhite,
					borderRadius: 10,
					padding: 30
				}}>
					{/* Icon for Check */}

                    <Icon name="ios-checkmark-circle-outline" style= {{margin: 10,}}size={60} color={ themeApp.colorPrimary }></Icon>

						<Text style={style.title}>Thank you for your order</Text>
						<Text style={{color: '#B1B1B1', fontSize: 20, fontWeight: 'bold'}}>You will recieve an Email confirmation shortly</Text>
                        
					{/* Items */}

					<View style={{ marginLeft: 5, marginTop: 10 }}>

					<FlatList 
						data={ products }
						renderItem={ ({item})=> <ModalItemForSummary product={ item } /> }
						keyExtractor={ item => item._id}
					/>

					    <View style= {{marginTop: 20, borderWidth: 4, backgroundColor: themeApp.colorBlack, borderColor: themeApp.colorBlack,  borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
						<Text style={{ color: themeApp.colorGrayDark, fontWeight: '500', fontSize: 18, marginLeft: 13, marginTop: 10}}>GRAND TOTAL</Text>
						<Text style={{ color: themeApp.colorWhite, fontSize: 20, fontWeight: '500' ,  marginTop: 15, margin: 5, marginLeft: 13, marginTop: 10}}>{convertToCurrency(totals)}</Text>
						</View>
					</View>

					<TouchableOpacity
						style={style.buttonCheckout}
						onPress= {() => {
							navigationn.navigate("Home");
							 setShowCard(false);
							 removeAllItems()
							}}

					>
						<Text style={[style.textCheckout, !theCartHaveProducts && { color: 'black' }]}>BACK TO HOME</Text>
					</TouchableOpacity>

				</View>


			</View>

		</Modal>
	)
}


const style = StyleSheet.create({
	title: {
		fontSize: 30,
		color: '#000',
		fontWeight: '600',
		margin: 3,
		marginRight: 5,
	},
	containerTitle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonClose: {
		position: 'absolute',
		top: -20,
		right: -20,
		backgroundColor: 'white',
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10
	},
	textRemoveAll: {
		color: themeApp.colorGrayDark,
		textDecorationLine: 'underline',
		fontSize: 22
	},
	buttonCheckout: {
		height: 60,
		backgroundColor: themeApp.colorPrimary,
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonCheckoutDisabled: {
		height: 60,
		backgroundColor: themeApp.colorWhite,
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: themeApp.colorBlack,
		borderWidth: 2
	},
	textCheckout: { color: themeApp.colorWhite, fontSize: 20 }
})