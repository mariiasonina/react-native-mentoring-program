import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  productContainer: {
    width: 178,
    maxWidth: '50%',
    height: 180,
    flexGrow: 1,
    padding: 10,
  },
  productPriceBar: {
    flexDirection: 'row',
    gap: 10,
  },
  productNewPrice: {
    fontWeight: '700',
    color: '#4A4A4A',
  },
  productOldPrice: {
    fontWeight: '700',
    color: '#8F8F8F',
    textDecorationLine: 'line-through',
  },
  productDiscount: {
    fontWeight: '700',
    color: '#00A8F3',
  },
});
