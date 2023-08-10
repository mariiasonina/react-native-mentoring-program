import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#008ACE',
    elevation: 4,
    shadowOpacity: 0.3,
    borderBottomWidth: 1,
    shadowColor: '#000000',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Roboto-Regular',
    letterSpacing: 0.15,
  },
  headerLeft: {
    paddingLeft: 15,
  },
  headerRight: {
    paddingRight: 15,
  },
  drawerBar: {
    width: '80%',
  },
  drawerHeader: {
    fontSize: 40,
    color: '#008ACE',
    fontWeight: '700',
    marginBottom: 30,
  },
  drawerLabel: {
    fontSize: 15,
    color: '#4A4A4A',
    fontWeight: '400',
    marginLeft: -15,
    marginBottom: -5,
    marginTop: -5,
  },
  drawerItemFocused: {
    backgroundColor: '#C3C3C3',
  },
  drawerSubHeader: {
    fontSize: 20,
    color: '#8F8F8F',
    fontWeight: '700',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  separator: {
    borderTopWidth: 1,
    borderTopColor: '#C3C3C3',
    marginVertical: 20,
  },
  stackHeaderRight: {
    flexDirection: 'row',
    columnGap: 25,
  },
  modal: {
    backgroundColor: 'transparent',
  },
});
