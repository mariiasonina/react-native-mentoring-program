import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	productContainer: {
		width: 178,
		maxWidth: '50%',
		height: 180,
		flexGrow: 1,
		padding: 10,
	},
	product: {
		height: '100%',
		padding: 5,
		backgroundColor: '#FFFFFF',
		justifyContent: 'space-between',
	},
	shadow: {
		elevation: 8, // for Android
		borderRadius: 5,
		// for iOS
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4,
	},
	productName: {
		color: '#000000',
		fontWeight: '400',
		fontSize: 15,
	},
	productImage: {
		alignSelf: 'center',
	},
	productPriceBar: {
		flexDirection: 'row',
		gap: 10,
	},
	productNewPrice: {
		fontWeight: '700',
		color: '#4A4A4A',
	},
	productOldPrice: {
		fontWeight: '700',
		color: '#8F8F8F',
		textDecorationLine: 'line-through',
	},
	productDiscount: {
		fontWeight: '700',
		color: '#00A8F3',
	},
});
