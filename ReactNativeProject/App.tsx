import React from 'react';
// import { MainPage } from '@screens/MainPage/MainPage';
import DataProvider from '@src/context/DataProvider';
import { ProductDetailsPage } from '@screens/ProductDetailsPage/ProductDetailsPage';

function App(): JSX.Element {
	return (
		<DataProvider>
			{/* <MainPage /> */}
			<ProductDetailsPage />
		</DataProvider>
	);
}

export default App;
