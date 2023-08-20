import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { OrderType } from '@src/context/AppContext/types';
import { useAppData } from '@src/context/AppContext/AppContext';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { styles } from './styles';

type Props = {
  orderDetails: OrderType;
};

export const OrderDetails = ({ orderDetails }: Props) => {
  const { id, date, totalAmount, status } = orderDetails;
  const { profile } = useAppData();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onOpenMap = () => navigation.navigate('Map');

  return (
    <View style={styles.orderDetailsContainer}>
      <View style={styles.orderDetailsItem}>
        <Text>Order Id</Text>
        <Text style={styles.orderDetailsValue}>{id}</Text>
      </View>
      <View style={styles.orderDetailsItem}>
        <Text>Order Date</Text>
        <Text style={styles.orderDetailsValue}>{date}</Text>
      </View>
      <View style={styles.orderDetailsItem}>
        <Text>Total Ammount</Text>
        <Text style={styles.orderDetailsValue}>${totalAmount}</Text>
      </View>
      <View style={styles.orderDetailsItem}>
        <Text>Payment Mode</Text>
        <Text style={styles.orderDetailsValue}>COD</Text>
      </View>
      <TouchableOpacity onPress={onOpenMap} style={styles.orderDetailsItem}>
        <Text>Shipping Address</Text>
        <Text
          style={
            styles.orderDetailsValue
          }>{`${profile.city}, ${profile.locality}, ${profile.build}`}</Text>
      </TouchableOpacity>
      <View style={styles.orderDetailsItem}>
        <Text>Status</Text>
        <Text style={styles.orderDetailsStatusGreen}>{status}</Text>
      </View>
    </View>
  );
};
