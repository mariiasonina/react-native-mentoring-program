import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type Props = {
	newPrice: number;
	oldPrice: number;
};

export const ProductPriceBar = ({ newPrice, oldPrice }: Props): JSX.Element => {
	const diff = oldPrice - newPrice;
	const discount = diff > 0 ? `${Math.round((diff / oldPrice) * 100)}%` : null;

	return (
		<View style={styles.productPriceBar}>
			<Text style={styles.productNewPrice}>${newPrice}</Text>
			<Text style={styles.productOldPrice}>${oldPrice}</Text>
			{discount && <Text style={styles.productDiscount}>${discount} Off</Text>}
		</View>
	);
};
