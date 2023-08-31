import { createContext, useContext } from 'react';
import { ConvertedProductsDataType } from '@src/dataConverters/convertProductsData';

type DataContextType = {
  data: ConvertedProductsDataType;
  filteredData: ConvertedProductsDataType;
  resetFilteredData: () => void;
  onRefresh: (filter?: string) => Promise<void>;
  refreshing: boolean;
};

const DataContext = createContext<DataContextType>({
  data: [],
  filteredData: [],
  resetFilteredData: () => {},
  onRefresh: async () => {},
  refreshing: false,
});

export const useData = () => useContext(DataContext);

export default DataContext;
