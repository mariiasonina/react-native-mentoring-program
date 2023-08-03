import React from 'react';
import { View } from 'react-native';
import { SearchBar } from '@components/SearchBar/SearchBar';
import { ProductList } from '@components/ProductList/ProductList';
import { styles } from './styles';

export const MainScreen = (): JSX.Element => (
  <View style={styles.main}>
    <SearchBar />
    <ProductList />
  </View>
);
