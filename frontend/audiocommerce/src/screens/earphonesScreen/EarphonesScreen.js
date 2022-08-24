import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { ProductCard } from '../../components/cards/ProductCard';
import { PullToRefresh } from '../../components/loading/PullToRefresh';
import { ProductContext } from '../../context/productContext/ProductContext';

export const EarphonesScreen = ({ navigation }) => {

	const { productState, getData } = useContext(ProductContext);

	const {products} = productState;

	const earphones = products.filter( product => product.category === 'earphones');
	return (	
		<PullToRefresh onRefresh={ getData }>
			{
				earphones.map( product =>(
					<ProductCard product={product} navigation={navigation} key={product._id} screenDetails={'DetailsEarphones'}/>
				))
			}
		</PullToRefresh>

	)
}