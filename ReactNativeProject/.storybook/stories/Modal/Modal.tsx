import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../Button/Button';

type Props = {
  header: string;
  text: string;
  buttons: { text: string; color: string; id: string; onPress: () => void }[];
};

export const Modal = ({ header, text, buttons }: Props) => (
  <View style={styles.modal}>
    <Text style={styles.header}>{header}</Text>
    <Text style={styles.text}>{text}</Text>
    <View style={styles.buttonsContainer}>
      {buttons.map(({ text, color, onPress, id }) => (
        <Button key={id} text={text} color={color} onPress={onPress} />
      ))}
    </View>
  </View>
);

export const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 30,
    borderWidth: 1,
    borderColor: 'darkred'
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#8F8F8F',
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: '#8F8F8F',
    paddingTop: 10,
    paddingBottom: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});
