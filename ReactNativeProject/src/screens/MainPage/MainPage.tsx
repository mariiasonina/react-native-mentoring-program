import React from 'react';
import { ScrollView } from 'react-native';
import { TopBar } from '@components/TopBar/TopBar';
import { SearchBar } from '@components/SearchBar/SearchBar';
import { ProductList } from '@components/ProductList/ProductList';

export const MainPage = (): JSX.Element => (
	<ScrollView stickyHeaderIndices={[0]}>
		<TopBar title="Ecommerce Store" leftIconName="menu" />
		<SearchBar />
		<ProductList />
	</ScrollView>
);
