import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  productContainer: {
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
  },
  priceDetailsHeader: {
    color: '#8F8F8F',
    fontSize: 20,
    fontWeight: '700',
  },
  priceDetailsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalPriceText: {
    color: '#4A4A4A',
    fontSize: 15,
  },
});
