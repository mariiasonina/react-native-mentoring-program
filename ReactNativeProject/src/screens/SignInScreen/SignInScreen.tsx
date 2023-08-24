import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { useAuth } from '@src/context/AuthContext/AuthContext';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

export const SignInScreen = ({ navigation }: Props) => {
  const { signIn } = useAuth();

  // temporary mock user data
  const onPress = () => {
    signIn({
      userName: 'spree@example.com',
      userPassword: 'spree123',
    });
    navigation.navigate('MainStack');
  };

  return (
    <View style={styles.signInContainer}>
      <Text>Sign in</Text>
      <Button title="Sign in" color="#008ACE" onPress={onPress} />
    </View>
  );
};
