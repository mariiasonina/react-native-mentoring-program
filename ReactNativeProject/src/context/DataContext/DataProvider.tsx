import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { fetchData } from '@src/api/api';
import {
  ConvertedProductsDataType,
  convertProductsData,
} from '@src/dataConverters/convertProductsData';
import DataContext from './DataContext';

const DataProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<ConvertedProductsDataType>([]);
  const [filteredData, setFilteredData] = useState<ConvertedProductsDataType>(
    [],
  );
  const [refreshing, setRefreshing] = useState(false);

  const refreshData = useCallback(async (filter?: string) => {
    setRefreshing(true);

    const responseData = await fetchData(filter);
    const convertedData = convertProductsData(
      responseData.data,
      responseData.included,
    );

    if (filter) {
      setFilteredData(convertedData);
    } else {
      setData(convertedData);
    }

    setRefreshing(false);
  }, []);

  const resetFilteredData = useCallback(() => setFilteredData([]), []);

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  return (
    <DataContext.Provider
      value={{
        data,
        filteredData,
        resetFilteredData,
        onRefresh: refreshData,
        refreshing,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
