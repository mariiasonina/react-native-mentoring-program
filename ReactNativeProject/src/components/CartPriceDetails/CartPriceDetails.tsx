import React from 'react';
import { View, Text } from 'react-native';
import { CartPriceDetailsType } from '@src/context/AppContext/AppProvider';
import { effects } from '@src/styles/effects';
import { styles } from './styles';

type Props = {
  cartPriceDetails: CartPriceDetailsType;
};

export const CartPriceDetails = ({ cartPriceDetails }: Props) => {
  const { totalAmount, price, delivery, discount, tax, totalPrice } =
    cartPriceDetails;

  return (
    <View style={[styles.productContainer, effects.shadow]}>
      <Text style={styles.priceDetailsHeader}>Price details</Text>
      <View style={styles.priceDetailsItem}>
        <Text>Price ({totalAmount} item)</Text>
        <Text>${price}</Text>
      </View>
      <View style={styles.priceDetailsItem}>
        <Text>Delivery</Text>
        <Text>${delivery}</Text>
      </View>
      <View style={styles.priceDetailsItem}>
        <Text>Discount</Text>
        <Text>${discount}</Text>
      </View>
      <View style={styles.priceDetailsItem}>
        <Text>Tax (2%)</Text>
        <Text>${tax}</Text>
      </View>
      <View style={effects.divider} />
      <View style={styles.priceDetailsItem}>
        <Text style={styles.totalPriceText}>Amount Payable</Text>
        <Text style={styles.totalPriceText}>${totalPrice}</Text>
      </View>
    </View>
  );
};
