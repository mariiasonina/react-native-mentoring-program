import React, { useEffect } from 'react';
import { TextInput } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
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
  const translateY = useSharedValue(8);
  const color = useSharedValue('#8F8F8F');
  const fontSize = useSharedValue(15);

  useEffect(() => {
    if (fontSize.value === 15 && value) {
      onFocus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fontSize.value, value]);

  const onChangeText = (newValue: string) => {
    onChange(storageKey, newValue);
  };

  const animatedLabelStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value) }],
    color: color.value,
    fontSize: fontSize.value,
  }));

  const onFocus = () => {
    translateY.value = withSpring(-10);
    color.value = withSpring('#4A4A4A');
    fontSize.value = withSpring(12);
  };

  const onBlur = () => {
    if (!value) {
      translateY.value = withSpring(8);
      color.value = withSpring('#8F8F8F');
      fontSize.value = withSpring(15);
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
