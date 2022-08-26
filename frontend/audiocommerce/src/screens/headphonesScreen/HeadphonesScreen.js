import React, { useContext, useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import { ProductCard } from '../../components/cards/ProductCard';
import { ProductContext } from '../../context/productContext/ProductContext';



export const HeadphonesScreen = ({ navigation }) => {

	const { productState, getData } = useContext(ProductContext);

	const [refreshing, setRefreshing] = useState(false);

	const headphones = useMemo(() => productState.products.filter(product => product.category === 'headphones'), [productState.products]);

	return (

			<FlatList
				data={headphones}
				renderItem={({ item }) => <ProductCard product={item} navigation={navigation} screenDetails={'DetailsHeadphones'} />}
				keyExtractor={item => item._id}
				onRefresh={ ()=> getData(setRefreshing) }
				refreshing={ refreshing }
			/>

	)
}