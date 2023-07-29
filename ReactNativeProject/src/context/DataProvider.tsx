import React, { useEffect, useState } from 'react';
import { fetchData } from '@src/api/api';
import {
	ConvertedProductsDataType,
	convertProductsData,
} from '@src/dataConverters/convertProductsData';
import DataContext from './DataContext';

type Props = {
	children: React.ReactNode;
};

const DataProvider = ({ children }: Props) => {
	const [data, setData] = useState<ConvertedProductsDataType>([]);

	const getData = async () => {
		const responseData = await fetchData();

		setData(convertProductsData(responseData.data, responseData.included));
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<DataContext.Provider value={{ data, refreshData: getData }}>
			{children}
		</DataContext.Provider>
	);
};

export default DataProvider;
