import React, { PropsWithChildren, useEffect, useState } from 'react';
import { fetchData } from '@src/api/api';
import {
  ConvertedProductsDataType,
  convertProductsData,
} from '@src/dataConverters/convertProductsData';
import DataContext from './DataContext';

const DataProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<ConvertedProductsDataType>([]);
  const [refreshing, setRefreshing] = useState(false);

  const refreshData = async () => {
    setRefreshing(true);

    const responseData = await fetchData();

    setData(convertProductsData(responseData.data, responseData.included));

    setRefreshing(false);
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <DataContext.Provider value={{ data, onRefresh: refreshData, refreshing }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
