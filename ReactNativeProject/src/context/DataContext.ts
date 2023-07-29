import { createContext, useContext } from 'react';
import { ConvertedProductsDataType } from '@src/dataConverters/convertProductsData';

type DataContextType = {
	data: ConvertedProductsDataType;
	refreshData: () => Promise<void>;
};

const DataContext = createContext<DataContextType>({
	data: [],
	refreshData: async () => {},
});

export const useData = () => useContext(DataContext);

export default DataContext;
