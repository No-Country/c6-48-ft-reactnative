import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { ProductCard } from '../../components/cards/ProductCard';
import { ProductContext } from '../../context/productContext/ProductContext';

export const SpeakersScreen = ({navigation}) => {

	const { productState } = useContext(ProductContext);

	const {products} = productState;

	const speaker = products.filter( product => product.category === 'speakers');

	return (
		<ScrollView>
			{
				speaker.map( product =>(
					<ProductCard product={product} navigation={navigation} key={product._id}/>
				))
			}
		</ScrollView>
	)
}
