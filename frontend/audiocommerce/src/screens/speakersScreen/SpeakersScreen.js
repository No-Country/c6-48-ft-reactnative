import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { ProductCard } from '../../components/cards/ProductCard';
import { PullToRefresh } from '../../components/loading/PullToRefresh';
import { ProductContext } from '../../context/productContext/ProductContext';

export const SpeakersScreen = ({navigation}) => {

	const { productState, getData } = useContext(ProductContext);

	const speaker = productState.products.filter( product => product.category === 'speakers');

	console.log('hey speakers')
	return (
		<PullToRefresh onRefresh={ getData }>
			{
				speaker.map( product =>(
					<ProductCard product={product} navigation={navigation} key={product._id} screenDetails={'DetailsSpeakers'}/>
				))
			}
		</PullToRefresh>
	)
}
