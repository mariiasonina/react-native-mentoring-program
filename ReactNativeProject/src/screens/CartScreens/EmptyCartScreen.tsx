import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import OrderIcon from '@assets/images/icons/order.svg';
import { InfoCard } from '@src/components/InfoCard/InfoCard';
import { RootStackParamList } from '@src/navigation/StackNavigator';

export const EmptyCartScreen = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPress = () => navigation.navigate('Main');

  return (
    <InfoCard
      icon={<OrderIcon />}
      subHeader="Your Cart is Empty!"
      text="Add product in your cart now"
      buttonText="Shop now"
      onPress={onPress}
    />
  );
};
