import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@rneui/themed';
import { styles } from './styles';

type Props = {
	title: string;
};

export const TopBar = ({ title }: Props): JSX.Element => (
	<View>
		<View style={styles.statusBar} />
		<View style={[styles.bar, styles.shadow]}>
			<Icon iconStyle={styles.icon} name="menu" type="material" />
			<Text style={styles.barText}>{title}</Text>
			<Icon iconStyle={styles.icon} name="shopping-cart" type="material" />
		</View>
	</View>
);
