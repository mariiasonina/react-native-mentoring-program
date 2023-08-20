import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  orderDetails: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  orderDetailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#FFFFFF',
    gap: 20,
  },
  orderDetailsHeader: {
    color: '#8F8F8F',
    fontSize: 20,
    fontWeight: '700',
  },
  orderDetailsItem: {
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  orderDetailsItemName: {
    color: '#4A4A4A',
    marginBottom: 10,
  },
  orderDetailsItemValue: {
    color: '#8F8F8F',
  },
  orderDetailsItemTotalPrice: {
    color: '#4A4A4A',
    fontWeight: '700',
    marginTop: 10,
  },
});
