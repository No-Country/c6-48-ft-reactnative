import React, { useContext, useEffect, useState } from 'react';
import {Text} from 'react-native';
import { apiDB } from '../../api/apiDb';
import { Loading } from '../../components';
import { ProductContext } from '../../context/productContext/ProductContext';

export const HomeScreen = () => {
	
	const context = useContext(ProductContext)

	const [loading, setLoading] = useState(true);

	const getData = async () => {
		const { data } = await apiDB.get('/productos', {
			params: {
				limite: 10
			}
		});
		context.addProducts(data.productos)
		setLoading(false);
		console.log('hey! se obtubo la data')
	}

	useEffect(() => {
		getData()
	}, [])

	if (loading){
		return (
			<Loading />
		)
	}

	return (
		<Text>Home</Text>
	)
}