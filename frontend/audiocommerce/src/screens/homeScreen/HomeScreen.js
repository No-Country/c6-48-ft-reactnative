import React, { useContext, useEffect, useState } from 'react';
import {ScrollView, Text} from 'react-native';
import { apiDB } from '../../api/apiDb';
import { DrawerContent, Loading, OrangeCard, BlackCard, GrayCard } from '../../components';
import { ProductContext } from '../../context/productContext/ProductContext';

export const HomeScreen = ({navigation}) => {

	const {addProducts, productState } = useContext(ProductContext);

	const [loading, setLoading] = useState(true);

	

	const getData = async () => {

		try {
			const { data } = await apiDB.get('/productos', {
				params: {
					limite: 20
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
			<BlackCard  product={ products[3]} navigation={navigation}/>
			<DrawerContent navigation={navigation}/>
			<OrangeCard  product={ products[6]} navigation={navigation} />
			<GrayCard product={ products[4]} navigation={navigation} />
		</ScrollView>
	)
}