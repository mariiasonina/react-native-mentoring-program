import React from 'react';
import { Image, View, Text, Button } from 'react-native';
import { useAuth } from '@src/context/AuthContext/AuthContext';
import { LoginFirst } from '@src/components/LoginFirst/LoginFirst';
import { ProductMainInfo } from '@src/components/ProductMainInfo/ProductMainInfo';
import { CartPriceDetails } from '@src/components/CartPriceDetails/CartPriceDetails';
import IncreaseIcon from '@assets/images/icons/plus.svg';
import DecreaseIcon from '@assets/images/icons/minus.svg';
import BusketIcon from '@assets/images/icons/busket.svg';
import SecurityIcon from '@assets/images/icons/security.svg';
import { effects } from '@src/styles/effects';
import { useAppData } from '@src/context/AppContext/AppContext';
import { EmptyScreen } from './EmptyCartScreen';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import { ConvertedProductType } from '@src/dataConverters/convertProductsData';

export const CartScreen = (): JSX.Element => {
  const { isSignedIn } = useAuth();
  const {
    addProductToCart,
    removeProductFromCart,
    cartProducts,
    removeProductCardFromCart,
    cartPriceDetails,
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

  return cartProducts.length ? (
    <ScrollView
      contentContainerStyle={styles.cartContainer}
      style={styles.cart}>
      {cartProducts.map(product => (
        <View
          key={product.id}
          style={[styles.productContainer, effects.shadow]}>
          <View style={styles.product}>
            <Image
              style={styles.productImage}
              source={{
                uri: `https://demo.spreecommerce.org${product.images[0].url_size_100x100}`,
              }}
            />
            <ProductMainInfo
              name={product.name}
              newPrice={product.price}
              oldPrice={product.oldPrice}
              discount={product.discount}
            />
          </View>
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
      <Button title="Proceed to payment" color="#008ACE" onPress={() => {}} />
    </ScrollView>
  ) : (
    <EmptyScreen />
  );
};
