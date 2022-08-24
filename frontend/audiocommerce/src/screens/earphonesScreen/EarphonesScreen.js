import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { ProductCard } from '../../components/cards/ProductCard';
import { ProductContext } from '../../context/productContext/ProductContext';

export const EarphonesScreen = ({ navigation }) => {

	const { productState } = useContext(ProductContext);

	const {products} = productState;

	const earphones = products.filter( product => product.category === 'earphones');

	return (
		<ScrollView>
			{
				earphones.map( product =>(
					<ProductCard product={product} navigation={navigation} key={product._id}/>
				))
			}
		</ScrollView>

	)
}