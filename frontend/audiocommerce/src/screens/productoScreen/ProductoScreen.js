import React, { useContext } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ProductContext } from '../../context/productContext/ProductContext'
import { themeApp } from '../../themeApp/themeApp';
import { convertToCurrency } from '../../helpers/converToCurrency'
import { ButtonAddProductCart } from '../../components/buttons/ButtonAddProductCart';
import { CartContext } from '../../context/cartContext/CartContext';
import {FooterScreen} from '../footerScreen/FooterScreen.js'

export const ProductoScreen = ({ product }) => {


	const { products } = useContext(CartContext).cartState;

	const thisProductIsInCart = products.some(productCart => productCart._id === product._id);
	const navigation = useNavigation();
	const price = convertToCurrency(product.price);

	return (
		<ScrollView>

			<View style={styles.container}>

				<View style={styles.containerProduct}>

					<TouchableOpacity
						style={styles.buttonGoBack}
						onPress={() => navigation.goBack()}
					>
						<Text style={styles.textGoBack}>Go Back</Text>

					</TouchableOpacity>

				</View>

				<View style={styles.containerImage}>

					<Image source={{ uri: product.img }} style={styles.image} />

				</View>

				<View style={styles.containerProduct}>

					{
						product.isNewProduct && <Text style={styles.textNew}>NEW PRODUCT</Text>
					}

					<Text style={styles.title}>{product.title}</Text>

					<Text style={[styles.title, { textTransform: 'uppercase' }]}>{product.category}</Text>

					<Text style={styles.text}>{product.description}</Text>

					<Text style={styles.price}>{price}</Text>

					{/* Hacer el botton para agregar al carrito */}
					<View style={ styles.containerAddCart}>
						{
							thisProductIsInCart
								? (<View style={styles.containerProdInCart}>
									<Text style={styles.textProdInCart}>This product is in your cart</Text>
								</View>)
								: (<ButtonAddProductCart product={product} />)
						}
					</View>

					<Text style={styles.title}>FEATURES</Text>

					<Text style={styles.text}>{product.features}</Text>
				</View>
			</View>
			<FooterScreen {...navigation}/>
		</ScrollView>
	)
}


const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
	},
	containerProduct: {
		width: 430
	},
	containerProdInCart: {
		height: 70,
		backgroundColor: themeApp.colorPrimary,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textProdInCart: {
		fontSize: 20,
		color: themeApp.colorWhite,
		textTransform: 'uppercase'
	},
	buttonGoBack: {
		marginVertical: 20
	},
	textGoBack: {
		fontSize: 20
	},
	containerImage: {
		backgroundColor: themeApp.colorSecundary,
		borderRadius: 10,
		width: 430,
		height: 430,
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		resizeMode: 'contain',
		width: 350,
		height: 350
	},
	text: {
		fontSize: 20,
		color: '#7d7d7d'
	},
	price: {
		color: themeApp.colorBlack,
		fontSize: 30,
		marginVertical: 10
	},
	textNew: {
		color: themeApp.colorPrimary,
		fontSize: 25,
		marginVertical: 25,
		letterSpacing: 10,
		alignSelf: 'flex-start'
	},
	title: {
		fontSize: 40,
		color: themeApp.colorBlack
	},
	containerAddCart:{
		marginVertical: 30
	}
})