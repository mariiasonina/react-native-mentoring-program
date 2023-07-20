import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	searchBar: {
		padding: 20,
	},
	shadow: {
		backgroundColor: '#FFFFFF',
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
	inputContainer: {
		flexDirection: 'row',
		height: 35,
		borderWidth: 1,
		paddingVertical: 5,
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderColor: '#8F8F8F',
	},
	input: {
		height: 35,
		paddingVertical: 5,
	},
	icon: {
		color: '#8F8F8F',
		fontSize: 25,
		paddingHorizontal: 10,
	},
});
