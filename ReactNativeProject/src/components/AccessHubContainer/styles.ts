import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  accessHubContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingBottom: 30,
  },
  accessHub: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    gap: 25,
  },
  topBar: {
    height: 55,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 40,
    color: '#00A8F3',
    fontWeight: '700',
    paddingVertical: 70,
    alignSelf: 'center',
    textAlign: 'center',
  },
  actionHintText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#00A8F3',
    textAlign: 'center',
    marginBottom: 25,
  },
  skipLogin: {
    backgroundColor: '#8F8F8F',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 8,
    borderRadius: 2,
    marginHorizontal: 20,
  },
  skipLoginText: {
    textTransform: 'uppercase',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});
