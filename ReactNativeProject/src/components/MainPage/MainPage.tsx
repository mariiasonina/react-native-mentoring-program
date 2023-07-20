import React from 'react';
import { View } from 'react-native';
import { TopBar } from '../TopBar/TopBar';
import { SearchBar } from '../SearchBar/SearchBar';
import { ProductList } from '../ProductList/ProductList';

export const MainPage = (): JSX.Element => (
	<View>
		<TopBar title="Ecommerce Store" />
		<SearchBar />
		<ProductList />
	</View>
);
