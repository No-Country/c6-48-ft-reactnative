import React, { useContext, useEffect, useMemo } from 'react'
import { FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../../context/cartContext/CartContext';
import { convertToCurrency } from '../../helpers/converToCurrency';
import { getTotalsToPay } from '../../helpers/getTotalsToPay';
import { themeApp } from '../../themeApp/themeApp';
import { ModalItem } from './ModalItem';

export const ModalCart = () => {

	const { cartState, setShowCart, removeAllItems } = useContext(CartContext);

	const { products } = cartState;

	const totals = useMemo(()=>  getTotalsToPay(products), [ products ]);
	
	const theCartHaveProducts = (products.length > 0);

	const HEIGHT  = useWindowDimensions().height ;

	useEffect(() => {
	  if(products.length === 0) {
		setShowCart(false)
	  }
	}, [products])
	

	return (
		<Modal
			visible={cartState.showCart}
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
					width: themeApp.widthStd,
					height: HEIGHT * .8 ,
					backgroundColor: themeApp.colorWhite,
					borderRadius: 10,
					padding: 30
				}}>
					{/* botton to close cart */}

					<TouchableOpacity
						style={style.buttonClose}
						onPress={() => setShowCart(!cartState.showCart)}
						activeOpacity={1}
					>
						<Icon name='close-circle-outline' size={35} color='#000' />
					</TouchableOpacity>

					{/* Title cart */}
					<View style={style.containerTitle}>

						<Text style={style.title}>CART ( {products.length} ) </Text>

						{
							theCartHaveProducts && (<TouchableOpacity
								onPress={() => removeAllItems()}
							>
								<Text style={style.textRemoveAll}>Remove all</Text>
							</TouchableOpacity>)
						}

					</View>

					{/* Items */}

					<FlatList 
						data={ products }
						renderItem={ ({item})=> <ModalItem product={ item } /> }
						keyExtractor={ item => item._id}
					/>

					<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
						<Text style={{ color: themeApp.colorGrayDark, fontSize: 20 }}>TOTAL</Text>
						<Text style={{ color: themeApp.colorBlack, fontSize: 20, fontWeight: '500' }}>{convertToCurrency(totals)}</Text>
					</View>

					<TouchableOpacity
						style={theCartHaveProducts ? style.buttonCheckout : style.buttonCheckoutDisabled}
						disabled={!theCartHaveProducts}
					>
						<Text style={[style.textCheckout, !theCartHaveProducts && { color: 'black' }]}>CHECKOUT</Text>
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
		backgroundColor: themeApp.colorWhite,
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: themeApp.colorBlack,
		borderWidth: 2
	},
	textCheckout: { color: themeApp.colorWhite, fontSize: 20 }
})