import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-native';
import { DrawerContent, Loading, OrangeCard, BlackCard, GrayCard } from '../../components';
import { PullToRefresh } from '../../components/loading/PullToRefresh';
import { ProductContext } from '../../context/productContext/ProductContext';

export const HomeScreen = ({ navigation }) => {

	const { productState, getData } = useContext(ProductContext);


	useEffect(() => {
		getData()
	}, [])

	if (productState.products.length === 0 && productState.isLoading) {
		return (
			<Loading />
		)
	}


	const { products } = productState;

	return (
		<PullToRefresh
			onRefresh={(setRefresh) => getData('', setRefresh)}
		>

			<BlackCard product={products[4]} screenDetails={'DetailsHome'} />

			<DrawerContent navigation={navigation} />

			<OrangeCard product={products[6]} screenDetails={'DetailsHome'} />

			<GrayCard product={products[9]} screenDetails={'DetailsHome'} />


		</PullToRefresh>
	)
}