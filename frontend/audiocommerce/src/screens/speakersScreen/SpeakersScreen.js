import React, { useContext, useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import { ProductCard } from '../../components/cards/ProductCard';
import { ProductContext } from '../../context/productContext/ProductContext';
import {FooterScreen} from '../footerScreen/FooterScreen.js'

export const SpeakersScreen = ({ navigation }) => {

	const { productState, getData } = useContext(ProductContext);
	const [refreshing, setRefreshing] = useState(false);

	const speaker = useMemo(() => productState.products.filter(product => product.category === 'speakers'), [productState.products]);

	return (
		<FlatList
			data={speaker}
			renderItem={({ item }) => <ProductCard product={item} navigation={navigation} screenDetails={'DetailsSpeakers'} />}
			keyExtractor={item => item._id}
			onRefresh={() => getData(setRefreshing)}
			refreshing={refreshing}
		/>
	)
}
