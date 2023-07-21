import React from 'react';
import { View } from 'react-native';
// import { MainPage } from '@screens/MainPage/MainPage';
import { ProductDetailsPage } from '@screens/ProductDetailsPage/ProductDetailsPage';

function App(): JSX.Element {
	return (
		<View>
			{/* <MainPage /> */}
			<ProductDetailsPage />
		</View>
	);
}

export default App;
