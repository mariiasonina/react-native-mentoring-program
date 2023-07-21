import { Icon } from '@rneui/base';
import React from 'react';
import { TextInput, View } from 'react-native';
import { effects } from '@styles/effects';
import { styles } from './styles';

export const SearchBar = (): JSX.Element => (
	<View style={[styles.searchBar, effects.shadow]}>
		<View style={styles.inputContainer}>
			<Icon name="search" type="material" iconStyle={styles.icon} />
			<TextInput style={styles.input} placeholder="Search products..." />
		</View>
	</View>
);
