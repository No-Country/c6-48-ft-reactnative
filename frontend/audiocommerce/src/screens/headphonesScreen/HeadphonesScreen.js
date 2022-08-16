import React, { useContext, useEffect } from 'react';
import { Button, ScrollView, Text } from 'react-native';
import { apiDB } from '../../api/apiDb';
import { ProductContext } from '../../context/productContext/ProductContext';



export const HeadphonesScreen = () => {

	const context = useContext(ProductContext)

	const dataHeadphones = async () => {
		const { data } = await apiDB.get('/productos', {
			params: {
				limite: 10
			}
		});
		context.addProducts(data.productos, 'headphones')

	}

	useEffect(() => {
		dataHeadphones()
	}, [])


	return (
		<ScrollView>
			<Text>
				{
					JSON.stringify(context.productState, null, 4)
				}

			</Text>
			<Button
				title='Add products'
				onPress={() => dataHeadphones()}
			/>
			<Button
				title='Add products cart'
				onPress={() => context.addProductCart('1')}
			/>
		</ScrollView>

	)
}