import { createContext, useContext } from 'react';
import { ConvertedProductsDataType } from '@src/dataConverters/convertProductsData';

const DataContext = createContext<ConvertedProductsDataType>([]);

export const useData = () => useContext(DataContext);

export default DataContext;
