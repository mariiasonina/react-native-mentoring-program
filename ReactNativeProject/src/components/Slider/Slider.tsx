import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import { Icon } from '@rneui/themed';

type Props = {
	images: {
		id: string;
		url_size_100: string;
		url_size_240: string;
	}[];
};

export const Slider = ({ images }: Props): JSX.Element => (
	<View style={styles.sliderContainer}>
		<Icon iconStyle={styles.icon} name="arrow-back-ios" type="material" />
		<View style={styles.contentContainer}>
			<Image
				style={styles.productImage}
				source={{
					uri: `https://demo.spreecommerce.org${images[0].url_size_240}`,
				}}
			/>
			<View style={styles.dots}>
				{images.map(({ id }, index) => (
					<View
						key={id}
						style={!index ? [styles.dot, styles.activeDot] : styles.dot}
					/>
				))}
			</View>
		</View>
		<Icon iconStyle={styles.icon} name="arrow-forward-ios" type="material" />
	</View>
);
