import React, { useContext, useEffect } from 'react';
import { Loading } from '../../components';
import { ProductCard } from '../../components/cards/ProductCard';
import { PullToRefresh } from '../../components/loading/PullToRefresh';
import { ProductContext } from '../../context/productContext/ProductContext';
import {FooterScreen} from '../footerScreen/FooterScreen.js'



export const HeadphonesScreen = ({ navigation }) => {

	const { productState, getData } = useContext(ProductContext);

	const headphones = productState.products.filter( product => product.category === 'headphones');

	return (
		<PullToRefresh onRefresh={(setRefresh) => getData(setRefresh)}>
			{
				headphones.map(product => (
					<ProductCard product={product} navigation={navigation} key={product._id} screenDetails={'DetailsHeadphones'} />
				))
			}
			<FooterScreen {...navigation}/>
		</PullToRefresh>
	)
}