import React from 'react';
import { View, Image, ImageSourcePropType } from 'react-native';
import { ProductMainInfo } from '@components/ProductMainInfo/ProductMainInfo';
import { effects } from '@styles/effects';
import { styles } from './styles';

type Props = {
	product: {
		id: string;
		name: string;
		imagePath: ImageSourcePropType;
		newPrice: number;
		oldPrice: number;
	};
};

export const ProductItem = ({ product }: Props): JSX.Element => {
	const { name, imagePath, newPrice, oldPrice } = product;

	return (
		<View style={styles.productContainer}>
			<View style={[styles.product, effects.shadow]}>
				<Image style={styles.productImage} source={imagePath} />
				<ProductMainInfo name={name} newPrice={newPrice} oldPrice={oldPrice} />
			</View>
		</View>
	);
};
