import React, { useContext } from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import { CartContext } from '../../context/cartContext/CartContext';
import { themeApp } from '../../themeApp/themeApp';

export const ModalCart = () => {

	const { cartState, setShowCart } = useContext( CartContext );



	return (
		<Modal
			visible={cartState.showCart}
			animationType='fade'
			transparent={true}
		// style={{

		// }}
		>
			<View style={{
				flex: 1,
				backgroundColor: 'rgba(0,0,0,.5)',
				justifyContent:'center',
				alignItems: 'center'
			}}>
				<View style={{
					width: themeApp.widthStd,
					height: 400,
					backgroundColor: themeApp.colorWhite
				}}>

					<Text> MODAL </Text>
					<TouchableOpacity
						onPress={() => setShowCart(false)}
					>
						<Text>cerrar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	)
}
