import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { ProductItem } from '@components/ProductItem/ProductItem';
import { useData } from '@src/context/DataContext';
import { DialogLoading } from '@rneui/base/dist/Dialog/Dialog.Loading';

export const ProductList = (): JSX.Element => {
	const products = useData();

	return (
		<View style={styles.productList}>
			{products.length ? (
				products.map(product => (
					<ProductItem key={product.id} product={product} />
				))
			) : (
				<DialogLoading loadingStyle={styles.loader} />
			)}
		</View>
	);
};
