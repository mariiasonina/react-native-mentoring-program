import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Analytics from 'appcenter-analytics';
import { useAuth } from '@src/context/AuthContext/AuthContext';
import { LoginFirst } from '@src/components/LoginFirst/LoginFirst';
import { CartPriceDetails } from '@src/components/CartPriceDetails/CartPriceDetails';
import IncreaseIcon from '@assets/images/icons/plus.svg';
import DecreaseIcon from '@assets/images/icons/minus.svg';
import BusketIcon from '@assets/images/icons/busket.svg';
import SecurityIcon from '@assets/images/icons/security.svg';
import { effects } from '@src/styles/effects';
import { useAppData } from '@src/context/AppContext/AppContext';
import { ConvertedProductType } from '@src/dataConverters/convertProductsData';
import { RootStackParamList } from '@src/navigation/StackNavigator';
import { ProductItem } from '@src/components/ProductItem/ProductItem';
import { getFormatedDate } from '@src/utils/getFormatedDate';
import { EmptyCartScreen } from './EmptyCartScreen';
import { styles } from './styles';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

export const CartScreen = ({ navigation }: Props) => {
  const { isSignedIn } = useAuth();
  const {
    addProductToCart,
    removeProductFromCart,
    cartProducts,
    removeProductCardFromCart,
    cartPriceDetails,
    addOrder,
    clearCart,
    user,
  } = useAppData();

  if (!isSignedIn) {
    return <LoginFirst />;
  }

  const onAddProductToCart = (product: ConvertedProductType) =>
    addProductToCart(product);

  const onRemoveProductFromCart = (productId: string) =>
    removeProductFromCart(productId);

  const onRemoveProductCardFromCart = (productId: string) =>
    removeProductCardFromCart(productId);

  const onProceedToPayment = async () => {
    addOrder({
      id: Math.floor(Math.random() * Date.now()).toString(),
      date: getFormatedDate(new Date()),
      products: cartProducts,
      totalAmount: cartPriceDetails.totalPrice,
      status: 'In-Processing',
    });
    clearCart();
    navigation.navigate('OrderConfirmation');

    await Analytics.trackEvent('onConfirmOrder', {
      TotalPrice: `${cartPriceDetails.totalPrice}$`,
      UserName: user.userName,
    });
  };

  if (!cartProducts.length) {
    return <EmptyCartScreen />;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.cartContainer}
      style={styles.cart}>
      {cartProducts.map(product => (
        <View
          key={product.id}
          style={[styles.productContainer, effects.shadow]}>
          <ProductItem product={product} productStyle={styles.product} />
          <View style={styles.controlPanel}>
            <View style={styles.countControl}>
              <IncreaseIcon onPress={() => onAddProductToCart(product)} />
              <Text style={styles.countValue}>{product.totalAmount}</Text>
              <DecreaseIcon
                onPress={() => onRemoveProductFromCart(product.id)}
              />
            </View>
            <BusketIcon
              onPress={() => onRemoveProductCardFromCart(product.id)}
            />
          </View>
        </View>
      ))}
      <CartPriceDetails cartPriceDetails={cartPriceDetails} />
      <View style={styles.securityBlock}>
        <SecurityIcon />
        <Text style={styles.securityText}>
          {'Safe and Secure Payments\n100% Authentic Ptoducts'}
        </Text>
      </View>
      <Button
        title="Proceed to payment"
        color="#008ACE"
        onPress={onProceedToPayment}
      />
    </ScrollView>
  );
};
