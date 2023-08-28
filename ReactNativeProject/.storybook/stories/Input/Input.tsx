import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

type Props = {
  value: string;
  placeholder?: string;
  width: number;
  height: number;
};

export const Input = ({
  value,
  placeholder,
  width,
  height,
}: Props) => {
  const [text, setText] = useState(value);

  return (
    <TextInput
      value={text}
      onChangeText={setText}
      placeholder={placeholder}
      style={[styles.input, { width, height }]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 20,
    borderRadius: 5,
    borderColor: 'white',
    padding: 10,
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
