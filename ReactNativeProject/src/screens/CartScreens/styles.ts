import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cartContainer: {
    flexGrow: 1,
    gap: 15,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  cart: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  productContainer: {
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    gap: 15,
  },
  controlPanel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  countValue: {
    fontSize: 15,
    paddingHorizontal: 15,
  },
  productImage: {
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  securityBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexGrow: 1,
    gap: 10,
  },
  securityText: {
    color: '#A5DC86',
    lineHeight: 15,
  },
});
