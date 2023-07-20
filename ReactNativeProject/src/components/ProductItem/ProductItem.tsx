import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
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
	const diff = oldPrice - newPrice;
	const discount = diff > 0 ? `${Math.round((diff / oldPrice) * 100)}%` : null;

	return (
		<View style={styles.productContainer}>
			<View style={[styles.product, styles.shadow]}>
				<Image style={styles.productImage} source={imagePath} />
				<Text style={styles.productName}>{name}</Text>
				<View style={styles.productPriceBar}>
					<Text style={styles.productNewPrice}>${newPrice}</Text>
					<Text style={styles.productOldPrice}>${oldPrice}</Text>
					{discount && (
						<Text style={styles.productDiscount}>${discount} Off</Text>
					)}
				</View>
			</View>
		</View>
	);
};
