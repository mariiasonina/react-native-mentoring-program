import React, { useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { SearchBar } from '@src/components/SearchBar/SearchBar';
import { useData } from '@src/context/DataContext/DataContext';
import { styles } from './styles';
import { ProductItem } from '@src/components/ProductItem/ProductItem';

export const SearchScreen = () => {
  const { filteredData, refreshing, resetFilteredData } = useData();

  useEffect(() => {
    resetFilteredData();
  }, [resetFilteredData]);

  return (
    <View style={styles.search}>
      <SearchBar autoFocus />
      <ScrollView contentContainerStyle={styles.productsContainer}>
        {refreshing ? (
          <ActivityIndicator size="large" color="#008ACE" />
        ) : (
          filteredData.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              productStyle={styles.product}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};
