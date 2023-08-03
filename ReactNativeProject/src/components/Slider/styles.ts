import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dots: {
    flexDirection: 'row',
    gap: 5,
    alignSelf: 'center',
    marginVertical: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: '#C3C3C3',
  },
  activeDot: {
    backgroundColor: '#008ACE',
  },
});
