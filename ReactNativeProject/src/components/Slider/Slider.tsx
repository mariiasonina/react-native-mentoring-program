import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import { Icon } from '@rneui/themed';

const staticImage = require('../../assets/images/product-xiaomi_250_250.png');

export const Slider = (): JSX.Element => (
	<View style={styles.sliderContainer}>
		<Icon iconStyle={styles.icon} name="arrow-back-ios" type="material" />
		<View style={styles.contentContainer}>
			<Image source={staticImage} />
			<View style={styles.dots}>
				<View style={styles.dot} />
				<View style={[styles.dot, styles.activeDot]} />
				<View style={styles.dot} />
				<View style={styles.dot} />
			</View>
		</View>
		<Icon iconStyle={styles.icon} name="arrow-forward-ios" type="material" />
	</View>
);
