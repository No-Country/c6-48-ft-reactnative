import React, { useContext, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import { ProductCard } from '../../components/cards/ProductCard';
import { ProductContext } from '../../context/productContext/ProductContext';
import { themeApp } from '../../themeApp/themeApp';

export const EarphonesScreen = React.memo(({ navigation }) => {

	const { productState, getData } = useContext(ProductContext);

	const [refreshing, setRefreshing] = useState(false);

	const earphones = useMemo(() => productState.products.filter(product => product.category === 'earphones'), [productState.products]);

	return (
		<FlatList
			data={earphones}
			renderItem={({ item }) => <ProductCard product={item} navigation={navigation} screenDetails={'DetailsEarphones'} />}
			keyExtractor={item => item._id}
			onRefresh={() => getData(setRefreshing)}
			refreshing={refreshing}
		/>
	)
})