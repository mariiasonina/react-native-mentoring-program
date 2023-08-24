import { createContext, useContext } from 'react';
import { ConvertedProductsDataType } from '@src/dataConverters/convertProductsData';

type DataContextType = {
  data: ConvertedProductsDataType;
  onRefresh: () => Promise<void>;
  refreshing: boolean;
};

const DataContext = createContext<DataContextType>({
  data: [],
  onRefresh: async () => {},
  refreshing: false,
});

export const useData = () => useContext(DataContext);

export default DataContext;
