import React from 'react';
import { ActivityIndicator, StyleSheet, View, Pressable } from 'react-native';

type Props = {
  size?: 'small' | 'large' | number;
  color: string;
};

export const Loader = ({ size, color }: Props) => (
  <ActivityIndicator size={size} color={color} />
);
