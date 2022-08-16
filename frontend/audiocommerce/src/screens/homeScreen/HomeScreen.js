import React, { useContext, useEffect } from 'react';
import {Text} from 'react-native';
import { apiDB } from '../../api/apiDb';
import { ProductContext } from '../../context/productContext/ProductContext';

export const HomeScreen = () => {
	
	const context = useContext(ProductContext)

	const getData = async () => {
		const { data } = await apiDB.get('/productos', {
			params: {
				limite: 10
			}
		});
		context.addProducts(data.productos)

	}

	useEffect(() => {
		getData()
		console.log('hey! se obtubo la data')
	}, [])

	return (
		<Text>Home</Text>
	)
}