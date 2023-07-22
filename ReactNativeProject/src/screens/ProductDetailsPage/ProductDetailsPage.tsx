import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from '@rneui/themed';
import { DialogLoading } from '@rneui/base/dist/Dialog/Dialog.Loading';
import { ConvertedProductType } from '@src/dataConverters/convertProductsData';
import { useData } from '@src/context/DataContext';
import { TopBar } from '@components/TopBar/TopBar';
import { Slider } from '@components/Slider/Slider';
import { ProductMainInfo } from '@components/ProductMainInfo/ProductMainInfo';
import { effects } from '@styles/effects';
import { styles } from './styles';

export const ProductDetailsPage = (): JSX.Element => {
	const data = useData();
	const [product, setProduct] = useState<ConvertedProductType | null>(null);

	useEffect(() => {
		if (data && data.length) {
			setProduct(data[0]);
		}
	}, [data]);

	return (
		<ScrollView stickyHeaderIndices={[0]}>
			<TopBar leftIconName="arrow-back" rightIconName="favorite-border" />
			<View style={styles.productDetailsContainer}>
				{product ? (
					<>
						<Slider images={product.images.slice(0, 4)} />
						<View style={styles.infoContainer}>
							<View style={[styles.mainInfo, styles.bottomLine]}>
								<ProductMainInfo
									name={product.name}
									newPrice={product.price}
									oldPrice={product.oldPrice}
								/>
							</View>
							<View style={styles.bottomLine}>
								<Text style={styles.infoTitle}>Select Color</Text>
								<View style={styles.infoValue}>
									<Text>Blue</Text>
								</View>
							</View>
							<View>
								<Text style={styles.infoTitle}>Description</Text>
								<Text style={styles.descriptionText}>
									{product.description}
								</Text>
							</View>
						</View>
						<View style={effects.shadow}>
							<Button buttonStyle={styles.button}>
								<Text style={styles.buttonText}>Add to cart</Text>
							</Button>
						</View>
					</>
				) : (
					<DialogLoading />
				)}
			</View>
		</ScrollView>
	);
};
