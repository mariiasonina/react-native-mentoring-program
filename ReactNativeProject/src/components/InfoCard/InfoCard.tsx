import React from 'react';
import { View, Text, Button, GestureResponderEvent } from 'react-native';
import { styles } from './styles';

type Props<T> = {
  icon: React.ReactElement;
  header: string;
  text: string;
  buttonText: string;
  isSignIn: boolean;
  onPress: T;
};

export const InfoCard = <T extends (event: GestureResponderEvent) => void>({
  icon,
  header,
  text,
  isSignIn,
  buttonText,
  onPress,
}: Props<T>) => (
  <View style={styles.infoCardContainer}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.header}>{header}</Text>
    <Text style={styles.text}>{text}</Text>
    <Button title={buttonText} color="#008ACE" onPress={onPress} />
    {!isSignIn && <Text style={styles.signUpText}>New here? Sign Up</Text>}
  </View>
);
