import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from '@rneui/themed';
import { TopBar } from '@components/TopBar/TopBar';
import { Slider } from '@components/Slider/Slider';
import { mockProducts } from '@components/ProductList/ProductList';
import { ProductMainInfo } from '@components/ProductMainInfo/ProductMainInfo';
import { effects } from '@styles/effects';
import { styles } from './styles';

const { name, newPrice, oldPrice } = mockProducts[0];

export const ProductDetailsPage = (): JSX.Element => (
	<ScrollView stickyHeaderIndices={[0]}>
		<TopBar leftIconName="arrow-back" rightIconName="favorite-border" />
		<View style={styles.productDetailsContainer}>
			<Slider />
			<View style={styles.infoContainer}>
				<View style={[styles.mainInfo, styles.bottomLine]}>
					<ProductMainInfo
						name={name}
						newPrice={newPrice}
						oldPrice={oldPrice}
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						porttitor turpis semper tellus consectetur, at aliquam leo
						efficitur. Nullam eget varius dui. In fermentum consequat ornare.
						Nullam et porttitor neque, ac molestie nunc. Sed sem nisl, tristique
						id lectus eu, egestas pretium purus. Pellentesque sed eros
						venenatis, fermentum arcu sit amet, vestibulum tortor.
					</Text>
				</View>
			</View>
			<View style={effects.shadow}>
				<Button buttonStyle={styles.button}>
					<Text style={styles.buttonText}>Add to cart</Text>
				</Button>
			</View>
		</View>
	</ScrollView>
);
