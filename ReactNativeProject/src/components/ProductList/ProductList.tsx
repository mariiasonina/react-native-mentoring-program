import React, { useState, useCallback } from 'react';
import { FlatList, View, RefreshControl } from 'react-native';
import { DialogLoading } from '@rneui/base/dist/Dialog/Dialog.Loading';
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
	const { data, refreshData } = useData();
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = useCallback(async () => {
		setRefreshing(true);

		await refreshData();

		setRefreshing(false);
	}, [refreshData]);

	return data.length ? (
		<View style={styles.productListContainer}>
			<FlatList
				columnWrapperStyle={styles.productList}
				keyExtractor={({ id }) => id}
				data={data}
				renderItem={renderProduct}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
				numColumns={2}
				horizontal={false}
				refreshing={refreshing}
			/>
		</View>
	) : (
		<DialogLoading />
	);
};
