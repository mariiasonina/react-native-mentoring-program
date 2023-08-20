import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { InfoCard } from '@src/components/InfoCard/InfoCard';
import OrderIcon from '@assets/images/icons/order.svg';

export const OrderConfirmationScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPress = () => navigation.navigate('Main');

  return (
    <InfoCard
      icon={<OrderIcon />}
      header="Order Confirmation"
      subHeader="Thank you for placing your order with us!"
      text="Please check your email for more details. For any questions and further information please contact our customer support."
      buttonText="Continue shopping"
      onPress={onPress}
    />
  );
};
