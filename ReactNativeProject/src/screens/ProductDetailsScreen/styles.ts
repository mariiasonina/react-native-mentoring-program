import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  productDetailsContainer: {
    paddingHorizontal: 20,
    paddingTop: 43,
    paddingBottom: 10,
  },
  infoTitle: {
    fontSize: 20,
    color: '#4A4A4A',
    fontWeight: '700',
    paddingVertical: 5,
    marginVertical: 10,
  },
  optionValue: {
    marginVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#F7F7F7',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#F7F7F7',
    borderRadius: 2,
  },
  optionValueSelected: {
    borderWidth: 1,
    borderColor: '#8F8F8F',
  },
  descriptionText: {
    fontSize: 15,
    textAlign: 'justify',
    color: '#4A4A4A',
  },
  button: {
    paddingTop: 10,
  },
  productName: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 15,
  },
});
