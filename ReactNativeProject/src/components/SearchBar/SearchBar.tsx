import React, { useState } from 'react';
import { TextInput, View, Pressable } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import SearchIcon from '@assets/images/icons/search.svg';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { useData } from '@src/context/DataContext/DataContext';
import { styles } from './styles';
import { effects } from '@styles/effects';

type Props = {
  autoFocus?: boolean;
};

export const SearchBar = ({ autoFocus }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [text, setText] = useState('');
  const { onRefresh } = useData();

  const onNavigateToSearch = () => navigation.navigate('Search');
  const onPress = () => onRefresh(text);

  return (
    <View style={[styles.searchBar, effects.shadow]}>
      <Pressable onPress={onNavigateToSearch} style={styles.inputContainer}>
        <SearchIcon onPress={onPress} width="17" height="17" color="#8F8F8F" />
        <TextInput
          style={styles.input}
          onChangeText={setText}
          onFocus={onNavigateToSearch}
          placeholder="Search products..."
          autoFocus={autoFocus}
        />
      </Pressable>
    </View>
  );
};
