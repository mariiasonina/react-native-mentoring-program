import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@rneui/themed';
import { effects } from '@styles/effects';
import { styles } from './styles';

type Props = {
	title?: string;
	leftIconName: string;
	rightIconName?: string;
};

export const TopBar = ({
	title,
	leftIconName,
	rightIconName,
}: Props): JSX.Element => (
	<>
		<View style={styles.statusBar} />
		<View style={[styles.bar, effects.shadow]}>
			<Icon iconStyle={styles.icon} name={leftIconName} type="material" />
			{title && <Text style={styles.barText}>{title}</Text>}
			<View style={styles.rightIconContainer}>
				{rightIconName && (
					<Icon iconStyle={styles.icon} name={rightIconName} type="material" />
				)}
				<Icon iconStyle={styles.icon} name="shopping-cart" type="material" />
			</View>
		</View>
	</>
);
