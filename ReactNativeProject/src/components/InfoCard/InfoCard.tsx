import React from 'react';
import { View, Text, Button, GestureResponderEvent } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { styles } from './styles';

type Props<T> = {
  icon: React.ReactElement;
  header?: string;
  subHeader: string;
  text: string;
  buttonText: string;
  isShowSignUpHint?: boolean;
  onPress: T;
};

export const InfoCard = <T extends (event: GestureResponderEvent) => void>({
  icon,
  header,
  subHeader,
  text,
  isShowSignUpHint,
  buttonText,
  onPress,
}: Props<T>) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressSignUp = () => navigation.navigate('SignUp');

  return (
    <View style={styles.infoCardContainer}>
      {header && <Text style={styles.header}>{header}</Text>}
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.subHeader}>{subHeader}</Text>
      <Text style={styles.text}>{text}</Text>
      <Button title={buttonText} color="#008ACE" onPress={onPress} />
      {isShowSignUpHint && (
        <Text style={styles.signUpHintText} onPress={onPressSignUp}>
          New here? Sign Up
        </Text>
      )}
    </View>
  );
};
