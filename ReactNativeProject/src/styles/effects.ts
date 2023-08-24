import { StyleSheet } from 'react-native';

export const effects = StyleSheet.create({
  shadow: {
    elevation: 4, // for Android
    // for iOS
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  divider: {
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#8F8F8F',
  },
});
