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

	useEffect(() => {
		fetchData().then(responseData =>
			setData(convertProductsData(responseData.data, responseData.included)),
		);
	}, []);

	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
