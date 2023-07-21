import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { ProductItem } from '@components/ProductItem/ProductItem';

// temporary data
export const mockProducts = [
	{
		id: '0',
		name: 'Xiaomi Mi A3',
		imagePath: require('../../assets/images/product-xiaomi.png'),
		newPrice: 222,
		oldPrice: 244,
	},
	{
		id: '1',
		name: 'OPPO K3',
		imagePath: require('../../assets/images/product-oppo.png'),
		newPrice: 150,
		oldPrice: 200,
	},
	{
		id: '2',
		name: 'iPhone XR',
		imagePath: require('../../assets/images/product-iphone.png'),
		newPrice: 849,
		oldPrice: 749,
	},
];

export const ProductList = (): JSX.Element => (
	<View style={styles.productList}>
		{mockProducts.map(product => (
			<ProductItem key={product.id} product={product} />
		))}
	</View>
);
