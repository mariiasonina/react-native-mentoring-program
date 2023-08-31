import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useAppData } from '@src/context/AppContext/AppContext';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { styles } from './styles';
import { effects } from '@src/styles/effects';
import { OrderDetails } from '@src/components/OrderDetails/OrderDetails';
import { OrderType } from '@src/context/AppContext/types';

type Props = {
  route: RouteProp<RootStackParamList, 'OrderDetails'>;
};

export const OrderDetailsScreen = ({ route }: Props) => {
  const { orders } = useAppData();
  const [orderDetails, setOrderDetails] = useState<OrderType | null>(null);
  const { orderId } = route.params;

  useEffect(() => {
    if (orders?.length) {
      const targetOrder = orders.find(({ id }) => id === orderId);

      if (targetOrder) {
        setOrderDetails(targetOrder);
      }
    }
  }, [orderId, orders]);

  return (
    <ScrollView
      style={styles.orderDetails}
      contentContainerStyle={styles.orderDetailsContainer}>
      {orderDetails && <OrderDetails orderDetails={orderDetails} />}
      <Text style={styles.orderDetailsHeader}>Ordered products</Text>
      {orderDetails?.products.map(
        ({ id, name, totalAmount, totalPrice, images }) => (
          <View key={id} style={[styles.orderDetailsItem, effects.shadow]}>
            <View>
              <Text style={styles.orderDetailsItemName}>{name}</Text>
              <Text style={styles.orderDetailsItemValue}>Color: blue</Text>
              <Text style={styles.orderDetailsItemValue}>
                Qty: {totalAmount}
              </Text>
              <Text style={styles.orderDetailsItemTotalPrice}>
                ${totalPrice * totalAmount}
              </Text>
            </View>
            <Image
              width={100}
              height={100}
              source={{
                uri: `https://demo.spreecommerce.org${images[0].url_size_100x100}`,
              }}
            />
          </View>
        ),
      )}
    </ScrollView>
  );
};
