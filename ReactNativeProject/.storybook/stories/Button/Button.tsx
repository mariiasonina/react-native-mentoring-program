import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  color: string;
};

export const Button = ({ onPress, text, color }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
  },
});
