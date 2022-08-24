import React, { useContext, useEffect } from 'react';
import { Loading } from '../../components';
import { ProductCard } from '../../components/cards/ProductCard';
import { PullToRefresh } from '../../components/loading/PullToRefresh';
import { ProductContext } from '../../context/productContext/ProductContext';



export const HeadphonesScreen = ({ navigation }) => {

	const { productState, getData } = useContext(ProductContext);


	useEffect(() => {
		getData()
	}, [])


	if (productState.products.length === 0 && productState.isLoading) {
		return (
			<Loading />
		)
	}

	const headphones = productState.products.filter( product => product.category === 'headphones');


	return (
		<PullToRefresh onRefresh={(setRefresh) => getData(setRefresh)}>
			{
				headphones.map(product => (
					<ProductCard product={product} navigation={navigation} key={product._id} screenDetails={'DetailsHeadphones'} />
				))
			}
		</PullToRefresh>

	)
}