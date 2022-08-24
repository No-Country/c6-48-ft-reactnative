import React, { useContext, useEffect, useState } from 'react';
import {RefreshControl, ScrollView, Text} from 'react-native';
import { apiDB } from '../../api/apiDb';
import { DrawerContent, Loading, OrangeCard, BlackCard, GrayCard } from '../../components';
import { PullToRefresh } from '../../components/loading/PullToRefresh';
import { ProductContext } from '../../context/productContext/ProductContext';

export const HomeScreen = ({navigation}) => {

	const { productState, getData } = useContext(ProductContext);

	useEffect(() => {
		getData()
	}, [])

	if (productState.products.length === 0 && productState.isLoading){
		return (
			<Loading />
			)
		}


	const { products } = productState;
	
	return (
		<PullToRefresh
			onRefresh={ (setRefresh)=>getData('', setRefresh ) }
		>

			<BlackCard  product={ products[4]} navigation={navigation}/>
			<DrawerContent navigation={navigation}/>
			<OrangeCard  product={ products[3]} navigation={navigation} />
			<GrayCard product={ products[2]} navigation={navigation} />
		</PullToRefresh>
	)
}