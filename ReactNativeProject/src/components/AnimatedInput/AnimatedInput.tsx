import React, { useEffect, useRef } from 'react';
import { TextInput, Easing, Animated } from 'react-native';
import { styles } from './styles';

type Props<T> = {
  value: string;
  label: string;
  storageKey: T;
  secureTextEntry?: boolean;
  onChange: (key: T, value: string) => void;
};

export const AnimatedInput = <T,>({
  value,
  label,
  secureTextEntry,
  storageKey,
  onChange,
}: Props<T>) => {
  const animatedValue = useRef(new Animated.Value(0));
  const prevValueState = useRef(value);

  useEffect(() => {
    // This condition ensures that the label moves up only one time
    // when the component has mounted and the input value is not empty.
    if (!prevValueState.current && value) {
      prevValueState.current = value;
      onFocus();
    }
  }, [value]);

  const onChangeText = (newValue: string) => {
    onChange(storageKey, newValue);
  };

  const animatedLabelStyles = {
    transform: [
      {
        translateY: animatedValue?.current?.interpolate({
          inputRange: [0, 1],
          outputRange: [7, -9],
          extrapolate: 'clamp',
        }),
      },
    ],
    fontSize: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 12],
      extrapolate: 'clamp',
    }),
    color: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: ['#8F8F8F', '#4A4A4A'],
    }),
  };

  const onFocus = () => {
    Animated.timing(animatedValue?.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  };

  const onBlur = () => {
    if (!value) {
      Animated.timing(animatedValue?.current, {
        toValue: 0,
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Animated.View style={styles.container}>
      <Animated.Text style={[animatedLabelStyles, styles.label]}>
        {label}
      </Animated.Text>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        onBlur={onBlur}
        onFocus={onFocus}
        secureTextEntry={secureTextEntry}
      />
    </Animated.View>
  );
};
