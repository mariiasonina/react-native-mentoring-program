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
	shadow: {
		zIndex: 2,
		elevation: 8, // for Android
		// for iOS
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4,
	},
	barText: {
		color: '#FFFFFF',
		fontSize: 20,
		fontWeight: '500',
		fontFamily: 'Roboto-Regular',
		letterSpacing: 0.15,
	},
	icon: {
		color: '#FFFFFF',
		fontSize: 25,
	},
});
