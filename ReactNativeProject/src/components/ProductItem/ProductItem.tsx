import React from 'react';
import { View, Image } from 'react-native';
import { ProductMainInfo } from '@components/ProductMainInfo/ProductMainInfo';
import { effects } from '@styles/effects';
import { ConvertedProductType } from '@src/dataConverters/convertProductsData';
import { styles } from './styles';

type Props = {
	product: ConvertedProductType;
};

export const ProductItem = ({ product }: Props): JSX.Element => {
	const { name, price, oldPrice, images } = product;
	return (
		<View style={styles.productContainer}>
			<View style={[styles.product, effects.shadow]}>
				<Image
					style={styles.productImage}
					source={{
						uri: `https://demo.spreecommerce.org${images[0].url_size_100}`,
					}}
				/>
				<ProductMainInfo name={name} newPrice={price} oldPrice={oldPrice} />
			</View>
		</View>
	);
};
