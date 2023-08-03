import React from 'react';
import { Text, View } from 'react-native';
import { ProductPriceBar } from '@components/ProductPriceBar/ProductPriceBar';
import { styles } from './styles';

type Props = {
  name: string;
  newPrice: number;
  oldPrice: number;
};

export const ProductMainInfo = ({
  name,
  newPrice,
  oldPrice,
}: Props): JSX.Element => (
  <View>
    <Text style={styles.productName}>{name}</Text>
    <ProductPriceBar newPrice={newPrice} oldPrice={oldPrice} />
  </View>
);
