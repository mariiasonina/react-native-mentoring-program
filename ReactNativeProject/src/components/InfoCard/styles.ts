import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  infoCardContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    backgroundColor: '#008ACE',
    borderRadius: 60,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  header: {
    fontSize: 40,
    color: '#00A8F3',
    fontWeight: '700',
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '700',
    color: '#8F8F8F',
    paddingTop: 30,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: '#8F8F8F',
    paddingVertical: 5,
    paddingBottom: 30,
    textAlign: 'center',
  },
  signUpHintText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#00A8F3',
    paddingTop: 20,
    textAlign: 'center',
  },
});
