import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

type Props = {
  title: string;
  size: 'sm' | 'md' | 'lg';
};

export const Header = ({ title, size }: Props) => {
  let fontSize;
  if (size === 'sm') {
    fontSize = 14;
  } else if (size === 'md') {
    fontSize = 18;
  } else if (size === 'lg') {
    fontSize = 22;
  }

  return (
    <View style={styles.header}>
      <Text style={[styles.title, { fontSize }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 10,
  },
  title: {
    color: 'white',
    fontWeight: '500',
  },
});
