import React from 'react';
import { View } from 'react-native';
import { MainPage } from '@screens/MainPage/MainPage';
import DataProvider from '@src/context/DataProvider';
// import { ProductDetailsPage } from '@screens/ProductDetailsPage/ProductDetailsPage';

function App(): JSX.Element {
	return (
		<View>
			<DataProvider>
				<MainPage />
				{/* <ProductDetailsPage /> */}
			</DataProvider>
		</View>
	);
}

export default App;
