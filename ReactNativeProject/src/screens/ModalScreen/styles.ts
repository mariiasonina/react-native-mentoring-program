import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingBottom: 30,
    paddingTop: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#8F8F8F',
    paddingTop: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: '#8F8F8F',
    paddingTop: 10,
    paddingBottom: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: '#008ACE',
    borderRadius: 4,
    width: 125,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: 1.25,
  },
});
