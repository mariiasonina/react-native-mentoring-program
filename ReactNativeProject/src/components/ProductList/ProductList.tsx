import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { ProductItem } from '@components/ProductItem/ProductItem';
import { useData } from '@src/context/DataContext';
import { ConvertedProductType } from '@src/dataConverters/convertProductsData';
import { styles } from './styles';

type RenderProductProps = {
  item: ConvertedProductType;
};

const renderProduct = ({ item }: RenderProductProps) => (
  <ProductItem product={item} />
);

export const ProductList = (): JSX.Element => {
  const { data, onRefresh, refreshing } = useData();

  if (!data.length) {
    return (
      <ActivityIndicator size="large" color="#008ACE" style={styles.loader} />
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.productList}
      columnWrapperStyle={styles.columnWrapper}
      data={data}
      renderItem={renderProduct}
      onRefresh={onRefresh}
      numColumns={2}
      refreshing={refreshing}
    />
  );
};
