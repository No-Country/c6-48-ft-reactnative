import React, { useContext, useMemo } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import  {CartContext}  from '../../context/cartContext/CartContext.js';
import { convertToCurrency } from '../../helpers/converToCurrency';
import { getTotalsToPay } from '../../helpers/getTotalsToPay';
import { themeApp } from '../../themeApp/themeApp';
import {ModalItemForSummary} from './ModalItemForSummary';
import {CardForCheckOutSubmit} from './CardForCheckOutSubmit';

export const ModalCartForSummary = () => {

	const {cartState} = useContext(CartContext);
	const { products } = cartState;

	const totals = useMemo(()=>  getTotalsToPay(products), [ products ]);
	const VAT = totals * 0.05;
	const shipping = totals * 0.2;
	const grandTotal = totals + shipping;


	
	

	return (
		<View style={{

			justifyContent: 'center',
			alignItems: 'center',

		}}>
				<View style={{
					width: 300,
					// height: HEIGHT * .8 ,
					backgroundColor: themeApp.colorWhite,
					borderRadius: 10,
					margin:5,
					padding: 30
				}}>

					{/* Title cart */}
					<View style={style.containerTitle}>
						<Text style={style.title}>SUMMARY</Text>
					</View>

					{/* Items */}
					<View style= {{marginTop: 2, marginTop: 2,}}> 
					<ScrollView
						showsVerticalScrollIndicator={false}
					>
						{
							products.map((product) => (<ModalItemForSummary product={product} key={product._id} />))
						}
					</ScrollView>
					</View>

					<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
						<Text style={{ color: '#A3A3A3', fontSize: 20 }}>TOTAL</Text>
						<Text style={{ color: themeApp.colorBlack, fontSize: 20, fontWeight: '500' }}>{convertToCurrency(totals)}</Text>
					</View>

					<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
						<Text style={{ color: '#A3A3A3', fontSize: 20 }}>SHIPPING</Text>
						<Text style={{ color: themeApp.colorBlack, fontSize: 20, fontWeight: '500' }}>{convertToCurrency(shipping)}</Text>
					</View>

					<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
						<Text style={{ color: '#A3A3A3', fontSize: 20 }}>VAT</Text>
						<Text style={{ color: themeApp.colorBlack, fontSize: 20, fontWeight: '500' }}>{convertToCurrency(VAT)}</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
						<Text style={{ color: '#A3A3A3', fontSize: 20 , fontWeight: "bold"}}>GRAND TOTAL</Text>
						<Text style={{ color: themeApp.colorPrimary, marginLeft: 15, fontSize: 20, fontWeight: '800' }}>{convertToCurrency(grandTotal)}</Text>
					</View>
				</View>
				<CardForCheckOutSubmit grandTotal={grandTotal}/>
			</View>
	)
}


const style = StyleSheet.create({
	title: {
		fontSize: 23,
		color: '#000',
		fontWeight: '600'
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
		backgroundColor: themeApp.colorPrimary,
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonCheckoutAble: {
		height: 60,
		backgroundColor: themeApp.colorPrimary,
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
		border: 10,
		borderWidth: 3,
		borderColor: '#A3A3A3',
	},

	TextFinal: {
		fontWeight: 'bold',
		fontSize: 15,
	},


	textCheckout: { color: themeApp.colorWhite, fontSize: 20 },
})