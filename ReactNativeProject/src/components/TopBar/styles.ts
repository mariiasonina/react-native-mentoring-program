import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	statusBar: {
		height: 20,
		backgroundColor: '#000000',
	},
	bar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#008ACE',
		padding: 15,
	},
	barText: {
		color: '#FFFFFF',
		fontSize: 20,
		fontWeight: '500',
		fontFamily: 'Roboto-Regular',
		letterSpacing: 0.15,
	},
	rightIconContainer: {
		flexDirection: 'row',
		columnGap: 25,
	},
	icon: {
		color: '#FFFFFF',
		fontSize: 25,
	},
});
