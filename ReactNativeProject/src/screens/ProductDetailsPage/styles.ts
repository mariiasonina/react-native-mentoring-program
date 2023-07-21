import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	productDetailsContainer: {
		paddingHorizontal: 20,
		paddingTop: 43,
		paddingBottom: 10,
	},
	infoContainer: {
		gap: 10,
	},
	infoTitle: {
		fontSize: 20,
		color: '#4A4A4A',
		fontWeight: '700',
		paddingVertical: 5,
	},
	infoValue: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		backgroundColor: '#F3F3F3',
		alignSelf: 'flex-start',
	},
	descriptionText: {
		fontSize: 15,
		textAlign: 'justify',
		color: '#4A4A4A',
	},
	mainInfo: {
		marginTop: 30,
		rowGap: 10,
	},
	bottomLine: {
		paddingBottom: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#8F8F8F',
	},
	productName: {
		color: '#000000',
		fontWeight: '400',
		fontSize: 15,
	},
	button: {
		backgroundColor: '#008ACE',
		borderRadius: 4,
		borderWidth: 1,
		paddingVertical: 10,
	},
	buttonText: {
		color: '#FFFFFF',
		fontSize: 15,
		fontWeight: '500',
		textTransform: 'uppercase',
		letterSpacing: 1.25,
	},
});
