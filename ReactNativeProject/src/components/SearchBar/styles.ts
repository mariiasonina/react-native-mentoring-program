import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	searchBar: {
		padding: 20,
		backgroundColor: '#FFFFFF',
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
