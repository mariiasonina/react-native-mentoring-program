import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useAuth } from '@src/context/AuthContext/AuthContext';
import { LoginFirst } from '@src/components/LoginFirst/LoginFirst';
import { useAppData } from '@src/context/AppContext/AppContext';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { effects } from '@src/styles/effects';
import { styles } from './styles';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

export const OrdersScreen = ({ navigation }: Props) => {
  const { isSignedIn } = useAuth();
  const { orders } = useAppData();

  if (!isSignedIn) {
    return <LoginFirst />;
  }

  return (
    <ScrollView
      style={styles.orders}
      contentContainerStyle={styles.ordersContainer}>
      {orders.map(order => (
        <View key={order.id} style={[styles.order, effects.shadow]}>
          <Text style={styles.orderItemDate}>{order.date}</Text>
          {order.products.map(({ name, id, images }) => (
            <View key={id} style={styles.orderItem}>
              <Text style={styles.orderItemName}>{name}</Text>
              <Image
                width={100}
                height={100}
                source={{
                  uri: `https://demo.spreecommerce.org${images[0].url_size_100x100}`,
                }}
              />
            </View>
          ))}
          <Text
            style={styles.viewOrderText}
            onPress={() =>
              navigation.navigate('OrderDetails', { orderId: order.id })
            }>
            View Order Details
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};
