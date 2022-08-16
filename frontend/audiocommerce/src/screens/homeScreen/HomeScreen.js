import React, { useContext, useEffect, useState } from 'react';
import {ScrollView, Text} from 'react-native';
import { apiDB } from '../../api/apiDb';
import { Loading } from '../../components';
import { NewProduct } from '../../components/home/NewProduct';
import { ProductContext } from '../../context/productContext/ProductContext';

export const HomeScreen = () => {
	
	const {addProducts, productState } = useContext(ProductContext)
	const [loading, setLoading] = useState(true);
	
	const getData = async () => {

		try {
			const { data } = await apiDB.get('/productos', {
				params: {
					limite: 10
				}
			});
			addProducts(data.productos)
			setLoading(false);
			console.log('hey! se obtubo la data')
			
		} catch (error) {
			console.log(error)
		}
	}
	
	useEffect(() => {
		setLoading(true)
		getData()
	}, [])

	if (loading){
		return (
			<Loading />
			)
		}
	const { products } = productState;
	return (
		<ScrollView>
			<NewProduct  product= { products[0]}/>
		</ScrollView>
	)
}