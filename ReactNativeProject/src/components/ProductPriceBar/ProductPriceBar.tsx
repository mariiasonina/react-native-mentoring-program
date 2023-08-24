import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type Props = {
  newPrice: number;
  oldPrice: number;
  discount: number;
};

export const ProductPriceBar = ({
  newPrice,
  oldPrice,
  discount,
}: Props): JSX.Element => {
  const percentDiscount =
    discount > 0 ? `${Math.round((discount / oldPrice) * 100)}` : 0;

  return (
    <View style={styles.productPriceBar}>
      <Text style={styles.productNewPrice}>${newPrice}</Text>
      <Text style={styles.productOldPrice}>${oldPrice}</Text>
      <Text style={styles.productDiscount}>{percentDiscount}% Off</Text>
    </View>
  );
};
