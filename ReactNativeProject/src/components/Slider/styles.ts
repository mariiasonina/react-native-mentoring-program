import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	sliderContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	contentContainer: {
		gap: 30,
	},
	productImage: {
		width: 240,
		height: 240,
	},
	icon: {
		fontSize: 25,
		color: '#C3C3C3',
	},
	dots: {
		flexDirection: 'row',
		gap: 5,
		alignSelf: 'center',
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
