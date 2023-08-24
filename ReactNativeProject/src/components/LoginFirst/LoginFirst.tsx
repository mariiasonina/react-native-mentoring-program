import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import PersonIcon from '@assets/images/icons/person.svg';
import { InfoCard } from '@src/components/InfoCard/InfoCard';

export const LoginFirst = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPress = () => navigation.navigate('SignIn');

  return (
    <InfoCard
      icon={<PersonIcon />}
      header="Login First!"
      text="Login first to view your cart"
      buttonText="Login now"
      isSignIn={false}
      onPress={onPress}
    />
  );
};
