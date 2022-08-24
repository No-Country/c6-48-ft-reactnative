import React, { useContext } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ProductContext } from '../../context/productContext/ProductContext'
import { themeApp } from '../../themeApp/themeApp';
import { convertToCurrency } from '../../helpers/converToCurrency'
import { useNavigation } from '@react-navigation/native';

export const ProductoScreen = () => {
	const navigation = useNavigation();
	const { productState } = useContext(ProductContext);

	const producto = productState.productDetails;
	console.log(JSON.stringify(producto, null, 4))
	const price = convertToCurrency(producto.price);
	
	return (
		<ScrollView>

			<View style={{
				alignItems: 'center'
			}}>
				<View 
					style={{
						width: 430
					}}
				>

					<TouchableOpacity
						style={{
							marginVertical: 20
						}}
						onPress={() => navigation.goBack()}
					>
						<Text
							style={{
								fontSize: 20
							}}
						>Go Back</Text>
					</TouchableOpacity>
				</View>

				<View style={{
					backgroundColor: themeApp.colorSecundary,
					borderRadius: 10,
					width: 430,
					height: 430,
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<Image
						source={{
							uri: producto.img
						}}
						style={{
							resizeMode: 'contain',
							width: 350,
							height: 350
						}}
					/>
				</View>
				<View
					style={{
						width: 430
					}}
				>

					{
						producto.isNewProduct && <Text style={{ color: themeApp.colorPrimary, fontSize: 25, marginVertical: 25, letterSpacing: 10, alignSelf: 'flex-start' }}>NEW PRODUCT</Text>
					}

					<Text
						style={{
							fontSize: 40,
							color: themeApp.colorBlack
						}}
					>{producto.title}</Text>
					<Text
						style={{
							fontSize: 40,
							color: themeApp.colorBlack,
							textTransform: 'uppercase'
						}}
					>
						{producto.category}
					</Text>

					<Text
						style={{
							fontSize: 20,
							color: '#7d7d7d'
						}}
					>{producto.description}</Text>

					<Text
						style={{
							color: themeApp.colorBlack,
							fontSize: 30,
							marginVertical: 10
						}}
					>{price}</Text>

					{/* Hacer el botton para agregar al carrito */}

					<Text
						style={{
							color: themeApp.colorBlack,
							fontSize: 40,
							marginVertical: 10
						}}
					>FEATURES</Text>
					<Text style={{
						fontSize: 20,
						color: '#7d7d7d'
					}}>{producto.features}</Text>
				</View>

			</View>
		</ScrollView>
	)
}
