import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  orders: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  ordersContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#FFFFFF',
    gap: 20,
  },
  order: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#C3C3C3',
  },
  orderItemName: {
    color: '#4A4A4A',
  },
  orderItemDate: {
    color: '#8F8F8F',
  },
  viewOrderText: {
    paddingTop: 20,
    color: '#008ACE',
    fontSize: 15,
  },
});
